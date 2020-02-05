// import { CreateCatDto } from './dto/create-cat.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '../../utils/model.util';
import { TopicCollect } from '../../models/topic.collect.model';
import { Topic } from '../../models/topic.model';
import { Category } from '../../models/category.model';

@Injectable()
export class TopicCollectService {
    constructor(@InjectModel(TopicCollect) private readonly TOPIC_COLLECT_REPOSITORY: typeof TopicCollect) {}

    async getPagedCollectTopics(page = 1, limit = 100, option = {}): Promise<{ rows: TopicCollect[]; count: number }> {
        const offset = (page - 1) * 20;
        return this.TOPIC_COLLECT_REPOSITORY.findAndCountAll({
            where: { userId: 1 },
            order: [['created_at', 'DESC']],
            limit,
            offset,
            include: [
                {
                    model: Topic,
                    required: true,
                    as: 'topic',
                    attributes: ['id', 'title', 'top', 'type'],
                    include: [
                        {
                            model: Category,
                            required: true,
                            as: 'category',
                            attributes: ['id', 'name'],
                        },
                    ],
                },
            ],
        });
    }
}
