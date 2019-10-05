const Service = require('egg').Service;

class NodeService extends Service {
    async list(page = 1, limit = 20, where = {}) {
        const { app, ctx } = this;
        return app.model.Node.findAndCountAll({});
    }

    async create(data) {
        const { app, ctx } = this;
        return app.model.Node.create(data);
    }

    async update(data) {
        const { app } = this;
        return app.model.Node.update(
            {
                name: data.name,
                detail: data.detail,
                icon: data.icon,
            },
            { where: { id: data.id } }
        );
    }
    async getNodeById(id) {
        const { app, ctx } = this;
        return app.model.Node.findOne({
            where: {
                id: {
                    [app.Sequelize.Op.eq]: id,
                },
            },
        });
    }
}

module.exports = NodeService;
