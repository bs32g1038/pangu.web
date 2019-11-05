import { NotFoundException, Param } from '@nestjs/common';
import { TopicService } from './topic.service';
import { Topic } from '../../models/topic.model';
import { TopicsArgs } from './dto/topics.args';
import { Controller, Get } from '@nestjs/common';

@Controller('/api')
export class TopicController {
    constructor(private readonly topicService: TopicService) {}

    @Get('/topics/:id')
    async topic(@Param() params: { id: string }): Promise<Topic> {
        const topic = await this.topicService.findOneById(params.id);
        if (!topic) {
            throw new NotFoundException(params.id);
        }
        return topic;
    }

    @Get('/topics')
    pagedTopics(@Param() params: TopicsArgs) {
        return this.topicService.findAndCountAll(params);
    }
}
