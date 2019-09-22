const Service = require('egg').Service;

class TopicService extends Service {
    async list(page = 1, limit = 20, where = {}) {
        const { app, ctx } = this;
        const offset = (page - 1) * 20;
        return app.model.Topic.findAndCountAll({
            // attributes: { exclude: ['userId'] },
            where,
            order: [['created_at', 'DESC']],
            limit,
            offset,
            include: [{ model: app.model.User, required: true, as: 'user' }],
        });
    }
}

module.exports = TopicService;
