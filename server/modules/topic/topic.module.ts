import { Module } from '@nestjs/common';
import { DateScalar } from '../../common/scalars/date.scalar';
import { TopicModelProvider } from '../../models/topic.model';
import { TopicResolver } from './topic.resolver';
import { TopicService } from './topic.service';

@Module({
    providers: [TopicModelProvider, TopicResolver, TopicService, DateScalar],
})
export class TopicModule {}
