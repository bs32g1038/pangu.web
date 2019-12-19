import { Query, Param, Controller, Get, Post, Body, NotFoundException } from '@nestjs/common';
import { TopicService } from './topic.service';
import { Topic } from '../../models/topic.model';
import { TopicsArgs } from './dto/topics.args';

@Controller('/v1/api')
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
    async pagedTopics(@Query() query: TopicsArgs) {
        return await this.topicService.findAndCountAll(query);
    }

    @Post('/topics')
    async postTopics(@Body() body) {
        return await this.topicService.save(body);
    }
}
