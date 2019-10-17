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

    async follow(userId, followUserId) {
        const { app } = this;
        const data = await app.model.Follow.findOne({
            where: {
                userId,
                followUserId,
            },
            paranoid: false, // query and loads the soft deleted records
        });
        if (data) {
            if (data.isSoftDeleted()) {
                data.restore();
            }
            return data;
        }
        return app.model.Follow.create({
            userId,
            followUserId,
        });
    }

    async cancelFollow(userId, followUserId) {
        const { app } = this;
        return await app.model.Follow.destroy({
            where: {
                userId,
                followUserId,
            },
        });
    }
}

module.exports = FollowService;
