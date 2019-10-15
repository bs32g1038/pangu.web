const Controller = require('egg').Controller;
const ResponseResult = require('../base/response-result');

class TopicCollectController extends Controller {
    async getCollectTopic() {
        const { ctx } = this;
        const { userId } = ctx.query;
        const collectTopics = await ctx.service.topicCollect.getCollectTopic(1, 100, { where: { userId } });
        ctx.body = ResponseResult.success(collectTopics);
    }
}

module.exports = TopicCollectController;
