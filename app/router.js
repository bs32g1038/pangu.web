'use strict';

module.exports = app => {
    const { router, controller } = app;

    router.get('/v1/api/topics', controller.topic.list);

    /**
     * 获取活跃用户列表
     */
    router.get('/v1/api/getActiveUserList', controller.user.getActiveUserList);

    /**
     * 注册
     */
    router.post('/v1/api/register', controller.user.register);

    /**
     * 登录
     */
    router.post('/v1/api/login', controller.user.login);

    app.config.routes.map(route => {
        router.get(`${route.path}`, controller[route.controller][route.handler]);
    });
};
