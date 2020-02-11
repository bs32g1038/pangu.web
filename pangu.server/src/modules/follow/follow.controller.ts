import { FollowService } from './follow.service';
import { Controller, Get, Post, Query, Body, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../../guards/roles.guard';
import { Roles } from '../../decorators/roles.decorator';

@Controller('/v1/api')
@UseGuards(RolesGuard)
export class FollowController {
    constructor(private readonly followService: FollowService) {}

    @Get('/follow-user')
    async getFollowUsers(@Query() query: { userId: string }) {
        return await this.followService.getFollowUsers(1, 100, { where: { userId: query.userId } });
    }

    @Get('/following-user')
    async getFollowingUsers(@Query() query: { followUserId: string }) {
        return await this.followService.getFollowingUsers(1, 100, { where: { followUserId: query.followUserId } });
    }

    @Roles('user')
    @Post('/follows')
    async follow(@Body() body) {
        const userId = body.userId;
        const followUserId = body.followUserId;
        return await this.followService.follow(userId, followUserId);
    }

    @Roles('user')
    @Post('/cancel-follow')
    async cancelFollow(@Body() body) {
        const userId = body.userId;
        const followUserId = body.followUserId;
        return await this.followService.cancelFollow(userId, followUserId);
    }
}
