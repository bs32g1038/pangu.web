import { Module } from '@nestjs/common';
import { TopicModelProvider } from '../../models/topic.model';
import { TopicController } from './topic.controller';
import { TopicService } from './topic.service';

@Module({
    providers: [TopicModelProvider, TopicController, TopicService],
})
export class TopicModule {}
