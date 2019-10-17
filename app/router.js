'use strict';

module.exports = app => {
    const { router, controller } = app;
    /**
     * 上传文件
     */
    router.post('/v1/api/upload', controller.upload.upload);

    /**
     * 话题api
     */
    router.get('/v1/api/topics', controller.topic.list);
    router.post('/v1/api/topics', controller.topic.create);
    router.put('/v1/api/topics', controller.topic.update);
    router.get('/v1/api/topics/:id', controller.topic.getTopicById);

    /**
     * 获取活跃用户列表
     */
    router.get('/v1/api/getActiveUserList', controller.user.getActiveUserList);

    /**
     * 话题收藏api
     */
    router.get('/v1/api/collect-topic', controller.topicCollect.getCollectTopic);

    /**
     * follow用户api
     */
    router.get('/v1/api/follow-user', controller.follow.getFollowUsers);

    router.get('/v1/api/following-user', controller.follow.getFollowingUsers);

    router.post('/v1/api/follows', controller.follow.follow);

    router.post('/v1/api/cancel-follow', controller.follow.cancelFollow);

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
    router.get('/v1/api/replyTopicList', controller.reply.getReplyTopicList);

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
