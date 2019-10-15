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
        const { userId } = ctx.query;
        const users = await ctx.service.follow.getFollowingUsers(1, 100, { where: { followUserId: userId } });
        ctx.body = ResponseResult.success(users);
    }
}

module.exports = FollowController;
