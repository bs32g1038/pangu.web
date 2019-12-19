import { Module } from '@nestjs/common';
import { FollowModelProvider } from '../../models/follow.model';
import { FollowController } from './follow.controller';
import { FollowService } from './follow.service';

@Module({
    providers: [FollowModelProvider, FollowController, FollowService],
})
export class FollowModule {}
