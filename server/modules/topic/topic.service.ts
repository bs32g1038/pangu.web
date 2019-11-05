// import { CreateCatDto } from './dto/create-cat.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '../../utils/model.util';
import { Topic } from '../../models/topic.model';
import { User } from '../../models/user.model';
import { Node } from '../../models/node.model';
import { Recruit } from '../../models/recruit.model';
import { TopicsArgs } from './dto/topics.args';
import Sequelize from 'sequelize';

const TYPE = {
    share: 1,
    issue: 2,
    recruit: 3,
};

@Injectable()
export class TopicService {
    constructor(@InjectModel(Topic) private readonly TOPIC_REPOSITORY: typeof Topic) {}

    async findAll(topicsArgs: TopicsArgs): Promise<Topic[]> {
        const offset = (topicsArgs.page - 1) * 20;
        return await this.TOPIC_REPOSITORY.findAll<Topic>({
            order: [['top', 'DESC'], ['created_at', 'DESC']],
            limit: topicsArgs.limit,
            offset,
            include: [
                { model: User, required: true, as: 'user' },
                { model: Node, required: true, as: 'node' },
                { model: User, required: false, as: 'lastReplyUser' },
            ],
        });
    }

    async findAndCountAll(topicsArgs: TopicsArgs): Promise<{ rows: Topic[]; count: number }> {
        const defaultArgs = { page: 1, limit: 25, ...topicsArgs };
        const offset = (defaultArgs.page - 1) * defaultArgs.limit;
        let where = {};
        if (defaultArgs.filter) {
            const { tab, userId, nodeId } = defaultArgs.filter;
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
        }
        return await this.TOPIC_REPOSITORY.findAndCountAll<Topic>({
            where,
            order: [['top', 'DESC'], ['created_at', 'DESC']],
            limit: topicsArgs.limit,
            offset,
            include: [
                { model: User, required: true, as: 'user' },
                { model: Node, required: true, as: 'node' },
                { model: User, required: false, as: 'lastReplyUser' },
            ],
        });
    }

    async findOneById(id: string): Promise<Topic> {
        return await this.TOPIC_REPOSITORY.findOne({
            where: {
                id: {
                    [Sequelize.Op.eq]: id,
                },
            },
            include: [
                { model: Node, required: true, as: 'node' },
                { model: User, required: true, as: 'user' },
                { model: Recruit, required: false, as: 'recruitInfo' },
            ],
        });
    }
}
