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

    async getActiveUserList() {
        const { app, ctx } = this;
        return app.model.User.findAll({
            attributes: { exclude: ['password', 'email'] },
            order: [['updatedAt', 'DESC']],
            limit: 5,
        });
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
