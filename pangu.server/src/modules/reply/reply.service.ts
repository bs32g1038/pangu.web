import { Injectable } from '@nestjs/common';
import { InjectModel } from '../../utils/model.util';
import { Reply } from '../../models/reply.model';
import { User } from '../../models/user.model';
import { Topic } from '../../models/topic.model';
import { Category } from '../../models/category.model';

@Injectable()
export class ReplyService {
    constructor(@InjectModel(Reply) private readonly REPLY_REPOSITORY: typeof Reply) {}

    async list(page = 1, limit = 100, option: { where?: any } = {}) {
        const offset = (page - 1) * 20;
        return this.REPLY_REPOSITORY.findAndCountAll({
            where: option.where,
            order: [['updatedAt', 'DESC']],
            limit,
            offset,
            include: [
                { model: User, required: true, as: 'user' },
                { model: Topic, required: true, as: 'topic', attributes: ['id', 'title'] },
            ],
        });
    }

    async getReplyTopicList(page = 1, limit = 100, option: { where?: any } = {}) {
        const offset = (page - 1) * 20;
        return this.REPLY_REPOSITORY.findAndCountAll({
            where: option.where,
            order: [['updatedAt', 'DESC']],
            limit,
            offset,
            include: [
                {
                    model: Topic,
                    required: true,
                    as: 'topic',
                    include: [
                        { model: User, required: true, as: 'user' },
                        { model: Category, required: true, as: 'category' },
                    ],
                },
            ],
        });
    }
}
