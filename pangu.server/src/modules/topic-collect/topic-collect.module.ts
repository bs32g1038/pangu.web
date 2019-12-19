import { Module } from '@nestjs/common';
import { TopicCollectModelProvider } from '../../models/topic.collect.model';
import { TopicCollectController } from './topic-collect.controller';
import { TopicCollectService } from './topic-collect.service';

@Module({
    controllers: [TopicCollectController],
    providers: [TopicCollectModelProvider, TopicCollectService],
})
export class TopicCollectModule {}
