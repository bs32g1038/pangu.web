const Controller = require('egg').Controller;
const ResponseResult = require('../base/response-result');
class ReplyController extends Controller {
    async list() {
        const { ctx } = this;
        const { topicId, page, limit } = ctx.query;
        const where = {};
        if (topicId) {
            where.topic_id = topicId;
        }
        const list = await ctx.service.reply.list(page, limit, {
            where,
        });
        ctx.body = ResponseResult.success(list);
    }

    async getReplyTopicList() {
        const { ctx } = this;
        const { userId, page, limit } = ctx.query;
        const list = await ctx.service.reply.getReplyTopicList(page, limit, { where: { userId } });
        ctx.body = ResponseResult.success(list);
    }
}
module.exports = ReplyController;
