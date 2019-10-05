const Controller = require('egg').Controller;
const ResponseResult = require('../base/response-result');
class ReplyController extends Controller {
    async list() {
        const { ctx } = this;
        const list = await ctx.service.reply.list();
        ctx.body = ResponseResult.success(list);
    }
}
module.exports = ReplyController;
