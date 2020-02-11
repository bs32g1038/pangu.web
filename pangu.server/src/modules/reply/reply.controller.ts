import { ReplyService } from './reply.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('/v1/api')
export class ReplyController {
    constructor(private readonly replyService: ReplyService) {}

    @Get('/replyList')
    async replyList(@Query() query: { topicId: string }) {
        return await this.replyService.list(1, 100, { where: { topicId: query.topicId } });
    }
}
