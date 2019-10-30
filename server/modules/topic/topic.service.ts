// import { CreateCatDto } from './dto/create-cat.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '../../utils/model.util';
import { Topic } from '../../models/topic.model';
import { User } from '../../models/user.model';
import { Node } from '../../models/node.model';
import { Recruit } from '../../models/recruit.model';
import { TopicsArgs } from './dto/topics.args';
import Sequelize from 'sequelize';

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
        const offset = (topicsArgs.page - 1) * 20;
        return await this.TOPIC_REPOSITORY.findAndCountAll<Topic>({
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
