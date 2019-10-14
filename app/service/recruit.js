const Service = require('egg').Service;

class RecruitService extends Service {
    async create(data, option = {}) {
        const { app, ctx } = this;
        return app.model.Recruit.create(data, option);
    }

    async update(data, option = {}) {
        const { app, ctx } = this;
        return app.model.Recruit.update(data, { where: { id: data.id }, ...option });
    }
}

module.exports = RecruitService;
