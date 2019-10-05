module.exports = app => {
    const { TEXT, INTEGER, DATE, BOOLEAN, NOW } = app.Sequelize;
    const schema = {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // 回复内容
        content: {
            type: TEXT,
        },
        // 喜欢的数量
        like: {
            type: INTEGER,
            defaultValue: 0,
        },
        // 话题 id
        topicId: {
            type: INTEGER,
            field: 'topic_id',
        },
        // 作者 id
        userId: {
            type: INTEGER,
            field: 'user_id',
        },
        // 回复 id
        replyId: {
            type: INTEGER,
            field: 'reply_id',
        },
        // 默认为 markdown
        contentIsHtml: {
            type: BOOLEAN,
            field: 'content_is_html',
            default: false,
        },
        deleted: {
            type: BOOLEAN,
            default: false,
            field: 'updated_at',
        },
        // 回复创建时间
        createdAt: {
            type: DATE,
            defaultValue: NOW,
            field: 'created_at',
        },
        // 回复更新时间
        updatedAt: {
            type: DATE,
            defaultValue: NOW,
            field: 'updated_at',
        },
    };
    const Reply = app.model.define('pangu_reply', schema, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL 创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
    });

    Reply.associate = function() {
        app.model.Reply.belongsTo(app.model.User, { as: 'user', foreignKey: 'userId' });
        app.model.Reply.belongsTo(app.model.Topic, { as: 'topic', foreignKey: 'topicId' });
    };

    return Reply;
    // 创建表
    // User.sync() 会创建表并且返回一个 Promise 对象
    // 如果 force = true 则会把存在的表（如果 users 表已存在）先销毁再创建表
    // 默认情况下 forse = false
    // let reply = Reply.sync({ force: false });

    // // 添加回复
    // Reply.addReply = function(
    //     replyconten,
    //     username,
    //     openid,
    //     email,
    //     pic,
    //     ip,
    //     city,
    //     country,
    //     jieid,
    //     authority,
    //     userstatu,
    //     vip,
    //     sign
    // ) {
    //     return app.model.Reply.create({
    //         replyconten,
    //         username,
    //         openid,
    //         email,
    //         pic,
    //         ip,
    //         city,
    //         country,
    //         jieid,
    //         authority,
    //         userstatu,
    //         vip,
    //         sign,
    //     });
    // };

    // // 查找回复 分页
    // Reply.findReply = function(index, jieid) {
    //     let indexs = (index - 1) * 20;
    //     let rows = 20;
    //     return app.model.Reply.findAndCountAll({
    //         where: { jieid: jieid },
    //         order: [['created_at', 'ASC']],
    //         limit: rows,
    //         offset: indexs,
    //     });
    // };

    // // 查找指定用户回复分页-用户类型0 本站注册
    // Reply.findUserReply = function(index, rows, email) {
    //     let row = rows || 20;
    //     let indexs = (index - 1) * row;
    //     return app.model.Reply.findAndCountAll({
    //         where: { email: email },
    //         order: [['created_at', 'ASC']],
    //         limit: row,
    //         offset: indexs,
    //     });
    // };

    // // 查找指定用户回复分页-用户类型qq qq登录用户
    // Reply.findUserQQReply = function(index, rows, openid) {
    //     let row = rows || 20;
    //     let indexs = (index - 1) * row;
    //     return app.model.Reply.findAndCountAll({
    //         where: { openid: openid },
    //         order: [['created_at', 'ASC']],
    //         limit: row,
    //         offset: indexs,
    //     });
    // };

    // return Reply;
};
