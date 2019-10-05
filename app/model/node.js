module.exports = app => {
    const { STRING, INTEGER, DATE, BOOLEAN, NOW } = app.Sequelize;
    const schema = {
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
            defaultValue: 0
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
    const Node = app.model.define('pangu_node', schema, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL 创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
    });
    return Node;
};
