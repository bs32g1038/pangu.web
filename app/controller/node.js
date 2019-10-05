const Controller = require('egg').Controller;
const ResponseResult = require('../base/response-result');
class NodeController extends Controller {
    async list() {
        const { ctx } = this;
        const listNode = await ctx.service.node.list();
        ctx.body = ResponseResult.success(listNode);
    }

    async create() {
        const { ctx } = this;
        const name = this.ctx.request.body.name;
        const detail = this.ctx.request.body.detail;
        const icon = this.ctx.request.body.icon;
        const node = await ctx.service.node.create({
            name,
            detail,
            icon,
        });
        ctx.body = ResponseResult.success(node);
    }

    async update() {
        const { ctx } = this;
        const id = this.ctx.request.body.id;
        const name = this.ctx.request.body.name;
        const detail = this.ctx.request.body.detail;
        const icon = this.ctx.request.body.icon;
        const node = await ctx.service.node.update({
            id,
            name,
            detail,
            icon,
        });
        ctx.body = ResponseResult.success(node);
    }

    async getNodeById() {
        const { ctx } = this;
        const node = await ctx.service.node.getNodeById(ctx.params.id);
        ctx.body = ResponseResult.success(node);
    }
}
module.exports = NodeController;
