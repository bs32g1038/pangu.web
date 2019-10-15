const Service = require('egg').Service;

class TopicService extends Service {
    async list(page = 1, limit = 20, option = {}) {
        const { app } = this;
        const offset = (page - 1) * 20;
        return app.model.Topic.findAndCountAll({
            // attributes: { exclude: ['userId'] },
            where: option.where,
            order: [['top', 'DESC'], ['created_at', 'DESC']],
            limit,
            offset,
            include: [
                { model: app.model.User, required: true, as: 'user' },
                { model: app.model.Node, required: true, as: 'node' },
                { model: app.model.User, required: false, as: 'lastReplyUser' },
            ],
        });
    }

    async create(data, option = {}) {
        const { app, ctx } = this;
        return app.model.Topic.create(data, option);
    }

    async update(data, option = {}) {
        const { app } = this;
        return app.model.Topic.update(
            {
                title: data.title,
                labelId: data.label,
                nodeId: data.node,
                content: data.content,
                top: data.top,
                good: data.good,
            },
            { where: { id: data.id }, ...option }
        );
    }

    async getTopicById(id) {
        const { app, ctx } = this;
        return app.model.Topic.findOne({
            where: {
                id: {
                    [app.Sequelize.Op.eq]: id,
                },
            },
            include: [
                { model: app.model.Node, required: true, as: 'node' },
                { model: app.model.User, required: true, as: 'user' },
                { model: app.model.Recruit, required: false, as: 'recruitInfo' },
            ],
        });
    }

 
}

module.exports = TopicService;
