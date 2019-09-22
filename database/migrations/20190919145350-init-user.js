'use strict';

module.exports = {
    // 在执行数据库升级时调用的函数，创建 pangu_user 表
    up: async (queryInterface, Sequelize) => {
        const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize;
        await queryInterface.createTable('pangu_user', {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            // 用户名
            username: {
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
            // 邮箱
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
                defaultValue: Sequelize.NOW,
                field: 'created_at',
            },
            // 用户更新时间
            updatedAt: {
                type: DATE,
                defaultValue: Sequelize.NOW,
                field: 'updated_at',
            },
        });
    },
    // 在执行数据库降级时调用的函数，删除 pangu_user 表
    down: async queryInterface => {
        await queryInterface.dropTable('pangu_user');
    },
};
