const Service = require('egg').Service;

class FollowService extends Service {
    async getFollowUsers(page = 1, limit = 100, option = {}) {
        const { app } = this;
        const offset = (page - 1) * 20;
        return app.model.Follow.findAndCountAll({
            where: option.where,
            order: [['created_at', 'DESC']],
            limit,
            offset,
            include: [
                {
                    model: app.model.User,
                    required: true,
                    as: 'followUser',
                },
            ],
        });
    }

    async getFollowingUsers(page = 1, limit = 100, option = {}) {
        const { app } = this;
        const offset = (page - 1) * 20;
        return app.model.Follow.findAndCountAll({
            where: option.where,
            order: [['created_at', 'DESC']],
            limit,
            offset,
            include: [
                {
                    model: app.model.User,
                    required: true,
                    as: 'user',
                },
            ],
        });
    }
}

module.exports = FollowService;
