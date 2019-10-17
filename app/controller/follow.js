const Controller = require('egg').Controller;
const ResponseResult = require('../base/response-result');

class FollowController extends Controller {
    async getFollowUsers() {
        const { ctx } = this;
        const { userId } = ctx.query;
        const users = await ctx.service.follow.getFollowUsers(1, 100, { where: { userId } });
        ctx.body = ResponseResult.success(users);
    }

    async getFollowingUsers() {
        const { ctx } = this;
        const { followUserId } = ctx.query;
        const users = await ctx.service.follow.getFollowingUsers(1, 100, { where: { followUserId } });
        ctx.body = ResponseResult.success(users);
    }

    async follow() {
        const { ctx } = this;
        const userId = this.ctx.request.body.userId;
        const followUserId = this.ctx.request.body.followUserId;
        const follow = await ctx.service.follow.follow(userId, followUserId);
        ctx.body = ResponseResult.success(follow);
    }

    async cancelFollow() {
        const { ctx } = this;
        const userId = this.ctx.request.body.userId;
        const followUserId = this.ctx.request.body.followUserId;
        const follow = await ctx.service.follow.cancelFollow(userId, followUserId);
        ctx.body = ResponseResult.success(follow);
    }
}

module.exports = FollowController;
