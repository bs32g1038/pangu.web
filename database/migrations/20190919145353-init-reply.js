'use strict';

module.exports = {
    // 在执行数据库升级时调用的函数，创建 pangu_reply 表
    up: async (queryInterface, Sequelize) => {
        const { INTEGER, DATE, TEXT, BOOLEAN } = Sequelize;
        await queryInterface.createTable('pangu_reply', {
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
            author_id: {
                type: INTEGER,
                field: 'reply_id',
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
                defaultValue: Sequelize.NOW,
                field: 'created_at',
            },
            // 回复更新时间
            updatedAt: {
                type: DATE,
                defaultValue: Sequelize.NOW,
                field: 'updated_at',
            },
        });
    },
    // 在执行数据库降级时调用的函数，删除 pangu_reply 表
    down: async queryInterface => {
        await queryInterface.dropTable('pangu_reply');
    },
};
