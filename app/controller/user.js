const Controller = require('egg').Controller;
const ResponseResult = require('../base/response-result');
class UserController extends Controller {
    async register() {
        const email = this.ctx.request.body.email;
        const password = this.ctx.request.body.password;

        const { ctx } = this;
        const user = await ctx.service.user.register(email, password);

        ctx.body = ResponseResult.success({
            id: user.id,
        });
    }

    async login() {
        const email = this.ctx.request.body.email;
        const password = this.ctx.request.body.password;

        const { ctx } = this;
        const user = await ctx.service.user.login(email, password);

        if (user) {
            const token = ctx.service.user.signToken({
                id: user.id,
            });
            ctx.session.userId = user.id;
            return (ctx.body = ResponseResult.success({
                id: user.id,
                avatar: user.avatar,
                username: user.username,
                account: user.account,
                token,
            }));
        }
        ctx.body = ResponseResult.failure(ResponseResult.ResponseCode.LOGIN_FAILURE);
    }

    async getActiveUserList() {
        const { ctx } = this;
        const userId = ctx.query.userId;
        const list = await ctx.service.user.getActiveUserList(userId);
        ctx.body = ResponseResult.success(list);
    }

    async getUserByUsername() {
        const { ctx } = this;
        const username = ctx.query.username;
        const userInfo = ctx.service.user.getUserInfoFromToken();
        const user = await ctx.service.user.getUserByUsername(username, userInfo.id);
        ctx.body = ResponseResult.success(user);
    }

    async fetchUserList() {
        const { ctx } = this;
        const list = await ctx.service.user.fetchUserList();
        ctx.body = ResponseResult.success(list);
    }


}
module.exports = UserController;
