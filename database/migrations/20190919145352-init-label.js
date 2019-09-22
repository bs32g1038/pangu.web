'use strict';

module.exports = {
    // 在执行数据库升级时调用的函数，创建 pangu_label 表
    up: async (queryInterface, Sequelize) => {
        const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize;
        await queryInterface.createTable('pangu_label', {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            // 标签名
            name: {
                type: STRING,
            },
            // 标签详情
            detail: {
                type: STRING,
            },
            // 话题数量
            topicCount: {
                type: INTEGER,
                field: 'topic_count',
            },
            // 图标
            icon: {
                type: STRING,
                allowNull: true,
            },
            // 是否显示图标
            isShowIcon: {
                type: BOOLEAN,
                default: false,
                field: 'is_show_icon',
            },
            // 创建时间
            createdAt: {
                type: DATE,
                defaultValue: Sequelize.NOW,
                field: 'created_at',
            },
            // 更新时间
            updatedAt: {
                type: DATE,
                defaultValue: Sequelize.NOW,
                field: 'updated_at',
            },
        });
    },
    // 在执行数据库降级时调用的函数，删除 pangu_label 表
    down: async queryInterface => {
        await queryInterface.dropTable('pangu_label');
    },
};
