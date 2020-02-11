import { Module } from '@nestjs/common';
import { ReplyModelProvider } from '../../models/reply.model';
import { ReplyController } from './reply.controller';
import { ReplyService } from './reply.service';

@Module({
    controllers: [ReplyController],
    providers: [ReplyModelProvider, ReplyService],
})
export class ReplyModule {}
