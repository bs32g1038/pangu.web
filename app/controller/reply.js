const Controller = require('egg').Controller;
const ResponseResult = require('../base/response-result');
class ReplyController extends Controller {
    async list() {
        const { ctx } = this;
        const { topicId, page, limit } = ctx.query;
        const list = await ctx.service.reply.list(page, limit, {
            where: {
                topic_id: topicId,
            },
        });
        ctx.body = ResponseResult.success(list);
    }
}
module.exports = ReplyController;
