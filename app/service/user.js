const Service = require('egg').Service;

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
        const { app, ctx } = this;
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
}

module.exports = UserService;
