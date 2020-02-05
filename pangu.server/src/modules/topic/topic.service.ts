import { Injectable } from '@nestjs/common';
import { InjectModel, InjectRepository } from '../../utils/model.util';
import { Topic } from '../../models/topic.model';
import { User } from '../../models/user.model';
import { Category } from '../../models/category.model';
import { TopicTag } from '../../models/topic.tag.model';
import { Tag } from '../../models/tag.model';
import { TopicsArgs } from './dto/topics.args';
import SE from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import _ from 'lodash';

const TYPE = {
    share: 1,
    issue: 2,
    recruit: 3,
};

@Injectable()
export class TopicService {
    constructor(
        @InjectModel(Topic) private readonly TOPIC_REPOSITORY: typeof Topic,
        @InjectModel(TopicTag) private readonly TOPIC_TAG_REPOSITORY: typeof TopicTag,
        @InjectRepository() private readonly repository: Sequelize
    ) {}

    async findAll(topicsArgs: TopicsArgs): Promise<Topic[]> {
        const offset = (topicsArgs.page - 1) * 20;
        return await this.TOPIC_REPOSITORY.findAll<Topic>({
            order: [
                ['top', 'DESC'],
                ['created_at', 'DESC'],
            ],
            limit: topicsArgs.limit,
            offset,
            include: [
                { model: User, required: true, as: 'user' },
                { model: Category, required: true, as: 'category' },
                { model: User, required: false, as: 'lastReplyUser' },
            ],
        });
    }

    async findAndCountAll(topicsArgs: TopicsArgs): Promise<{ rows: Topic[]; count: number }> {
        const defaultArgs = { page: 1, limit: 25, ...topicsArgs };
        const offset = (defaultArgs.page - 1) * defaultArgs.limit;
        let where = {};
        const { tab, userId, nodeId } = defaultArgs;
        if (!tab || tab === 'all') {
            where = {};
        } else if (tab === 'popular') {
            where = { good: true };
        } else {
            where = { type: TYPE[tab] };
        }
        if (nodeId) {
            where = { ...where, nodeId };
        }
        if (userId) {
            where = { ...where, userId };
        }
        return await this.TOPIC_REPOSITORY.findAndCountAll<Topic>({
            where,
            order: [
                ['top', 'DESC'],
                ['created_at', 'DESC'],
            ],
            limit: topicsArgs.limit,
            offset,
            include: [
                { model: User, required: true, as: 'user' },
                { model: Category, required: true, as: 'category' },
                { model: User, required: false, as: 'lastReplyUser' },
                {
                    model: Tag,
                    required: false,
                },
            ],
        });
    }

    async findOneById(id: string): Promise<Topic> {
        return await this.TOPIC_REPOSITORY.findOne({
            where: {
                id: {
                    [SE.Op.eq]: id,
                },
            },
            include: [
                { model: Category, required: true, as: 'category' },
                { model: User, required: true, as: 'user' },
                {
                    model: Tag,
                    required: false,
                },
            ],
        });
    }

    async save(entity) {
        const title = entity.title;
        const categoryId = entity.categoryId;
        const content = entity.content;
        const top = entity.top;
        const good = entity.good;
        const locked = entity.locked;
        const userId = entity.userId;
        const tags = entity.tags || [];
        return await this.repository.transaction(t => {
            return this.TOPIC_REPOSITORY.create(
                {
                    title,
                    categoryId,
                    content,
                    top,
                    good,
                    locked,
                    userId,
                },
                { transaction: t }
            ).then(async topic => {
                await Promise.all(
                    tags.map((id: string) => {
                        return this.TOPIC_TAG_REPOSITORY.create(
                            {
                                topicId: topic.id,
                                tagId: id,
                            },
                            { transaction: t }
                        );
                    })
                );
                return topic;
            });
        });
    }

    async update(entity) {
        const id = entity.id;
        const title = entity.title;
        const categoryId = entity.categoryId;
        const content = entity.content;
        const top = entity.top;
        const good = entity.good;
        const locked = entity.locked;
        const userId = entity.userId;
        const tags = entity.tags || [];
        return await this.repository.transaction(t => {
            return this.TOPIC_REPOSITORY.update(
                {
                    title,
                    categoryId,
                    content,
                    top,
                    good,
                    locked,
                    userId,
                },
                {
                    where: {
                        id,
                    },
                    transaction: t,
                }
            ).then(async topic => {
                return this.TOPIC_TAG_REPOSITORY.destroy({
                    where: {
                        topicId: id,
                    },
                    transaction: t,
                }).then(async () => {
                    await Promise.all(
                        tags.map((tagId: string) => {
                            return this.TOPIC_TAG_REPOSITORY.create(
                                {
                                    topicId: id,
                                    tagId: tagId,
                                },
                                { transaction: t }
                            );
                        })
                    );
                    return topic;
                });
            });
        });
    }
}
