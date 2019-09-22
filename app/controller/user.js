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

        ctx.body = ResponseResult.success({
            id: user.id,
        });
    }


    async getActiveUserList(){
        const { ctx } = this;
        const list = await ctx.service.user.getActiveUserList();
        ctx.body = ResponseResult.success(list);
    }

}
module.exports = UserController;
