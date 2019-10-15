const Service = require('egg').Service;
const jwt = require('jsonwebtoken');

class UserService extends Service {
    async register(email, password) {
        const { app, ctx } = this;
        const user = {
            username: email.split('@')[0],
            account: email,
            email,
            password,
            avatar: '/test/log.jpg',
        };
        return app.model.User.create(user);
    }

    async login(email, password) {
        const { app } = this;
        return app.model.User.findOne({
            where: {
                email: {
                    [app.Sequelize.Op.eq]: email,
                },
                password: {
                    [app.Sequelize.Op.eq]: password,
                },
            },
        });
    }

    async getActiveUserList(followUserId = null) {
        const { app, ctx } = this;
        const users = await app.model.User.findAll({
            attributes: { exclude: ['password', 'email'] },
            order: [['updatedAt', 'DESC']],
            limit: 5,
        });
        if (followUserId) {
            console.log(followUserId, "================")
            const ids = users.map(item => item.id);
            const follows = await app.model.Follow.findAll({
                where: {
                    followUserId,
                    userId: {
                        [app.Sequelize.Op.or]: ids,
                    },
                },
            });
            for (const follow of follows) {
                for (let i = 0; i < users.length; i++) {
                    if (follow.userId === users[i].id) {
                        users[i].setDataValue('isFollow', true);
                        break;
                    }
                }
            }
            console.log(users)
            return users;
        }
        return users;
    }

    async getUserByUsername(username) {
        const { app, ctx } = this;
        return app.model.User.findOne({
            where: {
                username: {
                    [app.Sequelize.Op.eq]: username,
                },
            },
        });
    }

    async fetchUserList(page = 1, limit = 20, where = {}) {
        const { app, ctx } = this;
        const offset = (page - 1) * 20;
        return app.model.User.findAndCountAll({
            // attributes: { exclude: ['userId'] },
            where,
            attributes: { exclude: ['password'] },
            order: [['updatedAt', 'DESC']],
            limit,
            offset,
        });
    }

    signToken(obj) {
        const { config } = this;
        return jwt.sign(obj, config.tokenKey, { expiresIn: '72h' });
    }

    verifyToken(token) {
        const { config } = this;
        try {
            return jwt.verify(token, config.tokenKey);
        } catch (err) {
            return null;
        }
    }
}

module.exports = UserService;
