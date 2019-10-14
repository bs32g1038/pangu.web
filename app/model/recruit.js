module.exports = app => {
    const { STRING, INTEGER, DATE, NOW } = app.Sequelize;
    const schema = {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // 有效开始
        startTime: {
            type: STRING,
            allowNull: false,
            field: 'start_time',
        },
        // 有效结束时间
        endTime: {
            type: STRING,
            allowNull: false,
            field: 'end_time',
        },
        // 地点
        location: {
            type: STRING,
            allowNull: false,
        },
        // 职位
        job: {
            type: STRING,
            allowNull: false,
        },
        //员工人数指标 1 代表 20人以下， 2代表 20 - 100人，以此类推
        staff: {
            type: INTEGER,
            defaultValue: 1,
        },
        // 融资情况，1代表不需要融资，2代表a轮，以此类推
        finance: {
            type: INTEGER,
            defaultValue: 1,
        },
        // 薪资范围，1代表3k-6k，2代表6k-10k，以此类推
        salary: {
            type: INTEGER,
            defaultValue: 1,
        },
        // 学历，1代表专科，2代表本科，以此类推
        education: {
            type: INTEGER,
            defaultValue: 1,
        },
        // 工作经验，1代表1年以下，2代表1-3年，以此类推
        experience: {
            type: INTEGER,
            defaultValue: 1,
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

    const Recruit = app.model.define('pangu_recruit', schema, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL 创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
    });
    // Recruit.associate = function() {
    //     app.model.Recruit.hasOne(app.model.Topic, { foreignKey: 'recruitId' });
    // };

    return Recruit;
};
