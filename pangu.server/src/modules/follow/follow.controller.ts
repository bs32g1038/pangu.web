import { FollowService } from './follow.service';
import { Controller, Get, Query, Body } from '@nestjs/common';

@Controller('/v1/api')
export class FollowController {
    constructor(private readonly followService: FollowService) {}

    @Get('/follow-user')
    async getFollowUsers(@Query() query: { userId: string }) {
        return await this.followService.getFollowUsers(1, 100, { where: { userId: query.userId } });
    }

    @Get('/following-user')
    async getFollowingUsers(@Query() query: { followUserId: string }) {
        return await this.followService.getFollowUsers(1, 100, { where: { followUserId: query.followUserId } });
    }

    @Get('/follows')
    async follow(@Body() body) {
        const userId = body.userId;
        const followUserId = body.followUserId;
        return await this.followService.follow(userId, followUserId);
    }

    @Get('/cancel-follow')
    async cancelFollow(@Body() body) {
        const userId = body.userId;
        const followUserId = body.followUserId;
        return await this.followService.cancelFollow(userId, followUserId);
    }
}
