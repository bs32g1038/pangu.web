import { TopicCollectService } from './topic-collect.service';
import { Controller, Get } from '@nestjs/common';

@Controller('/api')
export class TopicCollectController {
    constructor(private readonly topicCollectService: TopicCollectService) {}

    @Get('/topic-collect')
    getPagedCollectTopics() {
        return this.topicCollectService.getPagedCollectTopics();
    }
}
