const Service = require('egg').Service;

class ReplyService extends Service {
    async list(page = 1, limit = 20, option = {}) {
        const { app, ctx } = this;
        const offset = (page - 1) * 20;
        return app.model.Reply.findAndCountAll({
            // attributes: { exclude: ['userId'] },
            where: option.where,
            order: [['updatedAt', 'DESC']],
            limit,
            offset,
            include: [
                { model: app.model.User, required: true, as: 'user' },
                { model: app.model.Topic, required: true, as: 'topic', attributes: ['id', 'title'] },
            ],
        });
    }
}

module.exports = ReplyService;
