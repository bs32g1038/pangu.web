const Service = require('egg').Service;

class CollectTopicService extends Service {
    async getCollectTopic(page = 1, limit = 100, option = {}) {
        const { app } = this;
        const offset = (page - 1) * 20;
        return app.model.TopicCollect.findAndCountAll({
            where: { userId: 1 },
            order: [['created_at', 'DESC']],
            limit,
            offset,
            include: [
                {
                    model: app.model.Topic,
                    required: true,
                    as: 'topic',
                    attributes: ['id', 'title', 'top', 'type'],
                    include: [
                        {
                            model: app.model.Node,
                            required: true,
                            as: 'node',

                            attributes: ['id', 'name'],
                        },
                    ],
                },
            ],
        });
    }
}

module.exports = CollectTopicService;
