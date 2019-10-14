module.exports = app => {
    const { INTEGER, DATE, NOW } = app.Sequelize;
    const schema = {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: INTEGER,
            field: 'user_id',
        },
        topicId: {
            type: INTEGER,
            field: 'topic_id',
        },
        // 创建时间
        createdAt: {
            type: DATE,
            defaultValue: NOW,
            field: 'created_at',
        },
        // 更新时间
        updatedAt: {
            type: DATE,
            defaultValue: NOW,
            field: 'updated_at',
        },
    };
    const TopicCollect = app.model.define('pangu_topic_collect', schema, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL 创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
    });
    return TopicCollect;
};
