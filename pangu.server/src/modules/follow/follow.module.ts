import { Module } from '@nestjs/common';
import { FollowModelProvider } from '../../models/follow.model';
import { FollowController } from './follow.controller';
import { FollowService } from './follow.service';

@Module({
    controllers: [FollowController],
    providers: [FollowModelProvider, FollowService],
})
export class FollowModule {}
