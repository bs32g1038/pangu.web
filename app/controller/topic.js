const Controller = require('egg').Controller;
const ResponseResult = require('../base/response-result');
class TopicController extends Controller {
    async list() {
        const { ctx } = this;
        const listTopic = await ctx.service.topic.list();
        ctx.body = ResponseResult.success(listTopic);
    }
}
module.exports = TopicController;
