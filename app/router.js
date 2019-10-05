'use strict';

module.exports = app => {
    const { router, controller } = app;
    /**
     * 上传文件
     */
    router.post('/v1/api/upload', controller.upload.upload);

    router.get('/v1/api/topics', controller.topic.list);

    /**
     * 创建话题
     */
    router.post('/v1/api/topics', controller.topic.create);

    /**
     * 更新话题
     */
    router.put('/v1/api/topics', controller.topic.update);

    /**
     * 获取话题通过 id
     */
    router.get('/v1/api/topics/:id', controller.topic.getTopicById);

    /**
     * 获取活跃用户列表
     */
    router.get('/v1/api/getActiveUserList', controller.user.getActiveUserList);

    /**
     * 获取节点标签列表
     */
    router.get('/v1/api/nodes', controller.node.list);
    router.post('/v1/api/nodes', controller.node.create);
    router.put('/v1/api/nodes', controller.node.update);
    router.get('/v1/api/nodes/:id', controller.node.getNodeById);

    /**
     * 获取 话题回复
     */
    router.get('/v1/api/replyList', controller.reply.list);

    /**
     * 注册
     */
    router.post('/v1/api/register', controller.user.register);

    /**
     * 登录
     */
    router.post('/v1/api/login', controller.user.login);

    /**
     * 根据用户名获取用户信息
     */
    router.get('/v1/api/getUserByUsername', controller.user.getUserByUsername);

    router.get('/v1/api/users', controller.user.fetchUserList);

    app.config.routes.map(route => {
        router.get(`${route.path}`, controller[route.controller][route.handler]);
    });
};
