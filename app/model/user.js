module.exports = app => {
    const { STRING, INTEGER, DATE, BOOLEAN, NOW } = app.Sequelize;
    const schema = {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // 用户名
        username: {
            type: STRING,
            allowNull: true,
        },
        account: {
            type: STRING,
            allowNull: false,
        },
        // 密码
        password: {
            type: STRING,
            allowNull: false,
        },
        // 邮箱
        email: {
            type: STRING,
            allowNull: false,
        },
        // 头像
        avatar: {
            type: STRING,
            allowNull: false,
        },
        // 位置
        location: {
            type: STRING,
        },
        // 是否是vip
        vip: {
            type: BOOLEAN,
            defaultValue: false,
        },
        // 签名
        signature: {
            type: STRING,
        },
        // 是否激活
        active: {
            type: BOOLEAN,
            defaultValue: false,
        },
        //是否被封禁,默认为true：开启
        enable: {
            type: BOOLEAN,
            defaultValue: true,
        },
        // 用户积分
        score: {
            type: INTEGER,
            defaultValue: 0,
        },
        // 创建的话题数量
        topicCount: {
            type: INTEGER,
            defaultValue: 0,
            field: 'topic_count',
        },
        // 回复数量
        replyCount: {
            type: INTEGER,
            defaultValue: 0,
            field: 'reply_count',
        },
        // 跟随者的数量
        followerCount: {
            type: INTEGER,
            defaultValue: 0,
            field: 'follower_count',
        },
        // 关注他人的数量
        followingCount: {
            type: INTEGER,
            defaultValue: 0,
            field: 'following_count',
        },
        // 收藏的 标签 的数量？？？？
        collectTagCount: {
            type: INTEGER,
            defaultValue: 0,
            field: 'collect_tag_count',
        },
        // 收藏的 话题 数量
        collectTopicCount: {
            type: INTEGER,
            defaultValue: 0,
            field: 'collect_topic_count',
        },
        // 用户创建时间
        createdAt: {
            type: DATE,
            defaultValue: NOW,
            field: 'created_at',
        },
        // 用户更新时间
        updatedAt: {
            type: DATE,
            defaultValue: NOW,
            field: 'updated_at',
        },
    };
    const User = app.model.define('pangu_user', schema, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL 创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
    });

    User.beforeCreate((user, options) => {
        // return hashPassword(user.password).then(hashedPw => {
        //     user.password = hashedPw;
        //     const now = new Date();
        //     user.updatedAt = now;
        // });
    });

    // User.associate = function() {
    //     app.model.User.hasOne(app.model.Follow, { as: 'follow', foreignKey: 'userId' });
    // };

    return User;

    // // 添加用户qq
    // User.addUserqq = function(username, pic, type, authority, statu, vip, sign, openid) {
    //     return app.model.User.create({
    //         username,
    //         pic,
    //         type,
    //         authority,
    //         statu,
    //         vip,
    //         sign,
    //         openid,
    //         reply: '0',
    //     });
    // };

    // // 添加用户
    // User.addUser = function(username, password, email, pic, type, authority, statu, vip, sign) {
    //     return app.model.User.create({
    //         username,
    //         password,
    //         email,
    //         pic,
    //         type,
    //         authority,
    //         statu,
    //         vip,
    //         sign,
    //         reply: '0',
    //     });
    // };

    // // 查找用户用户
    // User.findOneUser = function(email) {
    //     return app.model.User.findOne({ where: { email: email } });
    // };

    // // 查找用户用户
    // User.findOneUserOpenid = function(openid) {
    //     return app.model.User.findOne({ where: { openid: openid } });
    // };

    // //修改回帖次数
    // User.updataReply = function(id, n) {
    //     return app.model.User.update(
    //         { reply: n },
    //         {
    //             where: {
    //                 id: id,
    //             },
    //         }
    //     );
    // };

    // //获取回帖次数
    // User.findReply = function(id) {
    //     return app.model.User.findOne({ where: { id: id } });
    // };

    // //回帖排行榜
    // User.hotReply = function(index) {
    //     let indexs = (index - 1) * 20;
    //     let rows = 20;
    //     return app.model.User.findAndCountAll({
    //         order: [['reply', 'DESC']],
    //         limit: rows,
    //         offset: indexs,
    //     });
    // };

    // return User;
};
