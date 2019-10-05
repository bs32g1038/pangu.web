const Controller = require('egg').Controller;
const ResponseResult = require('../base/response-result');
class TopicController extends Controller {
    async list() {
        const TYPE = {
            share: 1,
            issue: 2,
        };

        const { ctx, app } = this;
        const { tab, page, limit } = ctx.query;
        const option = {};
        if (!tab || tab === 'all') {
            option.where = {};
        } else if (tab === 'popular') {
            option.where = { good: true };
        } else {
            option.where = { type: TYPE[tab] };
        }
        // if (!query.good) {
        //     query.create_at = {
        //         $gte: moment()
        //             .subtract(1, 'years')
        //             .toDate(),
        //     };
        // }
        const listTopic = await ctx.service.topic.list(page, limit, option);
        ctx.body = ResponseResult.success(listTopic);
    }

    async create() {
        const { ctx } = this;
        const title = this.ctx.request.body.title;
        const nodeId = this.ctx.request.body.node;
        const type = this.ctx.request.body.type;
        const content = this.ctx.request.body.content;
        const top = this.ctx.request.body.top;
        const good = this.ctx.request.body.good;
        const topic = await ctx.service.topic.create({
            title,
            nodeId,
            type,
            content,
            top,
            good,
        });
        ctx.body = ResponseResult.success(topic);
    }

    async update() {
        const { ctx } = this;
        const id = this.ctx.request.body.id;
        const title = this.ctx.request.body.title;
        const nodeId = this.ctx.request.body.node;
        const type = this.ctx.request.body.type;
        const content = this.ctx.request.body.content;
        const top = this.ctx.request.body.top;
        const good = this.ctx.request.body.good;
        const topic = await ctx.service.topic.update({
            id,
            title,
            nodeId,
            type,
            content,
            top,
            good,
        });
        ctx.body = ResponseResult.success(topic);
    }

    async getTopicById() {
        const { ctx } = this;
        const topic = await ctx.service.topic.getTopicById(ctx.params.id);
        ctx.body = ResponseResult.success(topic);
    }
}
module.exports = TopicController;
