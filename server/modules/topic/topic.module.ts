import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { TopicModelProvider } from '../../models/topic.model';
import { RecruitModelProvider } from '../../models/recruit.model';
import { TopicController } from './topic.controller';
import { TopicService } from './topic.service';

@Module({
    imports: [DatabaseModule],
    controllers: [TopicController],
    providers: [TopicModelProvider, RecruitModelProvider, TopicService],
})
export class TopicModule {}
