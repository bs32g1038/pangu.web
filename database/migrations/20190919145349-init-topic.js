'use strict';

module.exports = {
    // 在执行数据库升级时调用的函数，创建 pangu_topic 表
    up: async (queryInterface, Sequelize) => {
        const { INTEGER, DATE, STRING, TEXT, BOOLEAN } = Sequelize;
        await queryInterface.createTable('pangu_topic', {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            // 话题标题
            title: {
                type: STRING,
                allowNull: false,
            },
            // 话题内容
            content: {
                type: TEXT,
            },
            //是否置顶
            top: {
                type: BOOLEAN,
                defaultValue: false,
            },
            //是否精华
            good: {
                type: BOOLEAN,
                defaultValue: false,
            },
            // 是否锁定
            locked: {
                type: BOOLEAN,
                defaultValue: false,
            },
            // 浏览数量
            visitCount: {
                type: INTEGER,
                field: 'visit_count',
                defaultValue: 0,
            },
            // 回复数量
            replyCount: {
                type: INTEGER,
                field: 'reply_count',
                defaultValue: 0,
            },
            // 收藏数量
            collectCount: {
                type: INTEGER,
                field: 'collect_count',
                defaultValue: 0,
            },
            // 标签 id
            tagId: {
                type: INTEGER,
                field: 'tag_id',
            },
            // 作者 id
            userId: {
                type: INTEGER,
                field: 'user_id',
            },
            // 最后回复的 用户的 id
            lastReplyUserId: {
                type: INTEGER,
                field: 'last_reply_user_id',
            },
            // 最后回复时间
            lastRepliedAt: {
                type: DATE,
                field: 'last_replied_at',
            },
            // 话题创建时间
            createdAt: {
                type: DATE,
                defaultValue: Sequelize.NOW,
                field: 'created_at',
            },
            // 话题更新时间
            updatedAt: {
                type: DATE,
                defaultValue: Sequelize.NOW,
                field: 'updated_at',
            },
        });
    },
    // 在执行数据库降级时调用的函数，删除 pangu_topic 表
    down: async queryInterface => {
        await queryInterface.dropTable('pangu_topic');
    },
};
