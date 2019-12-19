import { Table, Column, Model, AutoIncrement, Default } from 'sequelize-typescript';
import { NOW } from 'sequelize';
import { getProviderByModel } from '../utils/model.util';

@Table({
    tableName: 'pangu_node',
    freezeTableName: true,
})
export class Node extends Model<Node> {
    @AutoIncrement
    @Column({ primaryKey: true })
    id: number;

    @Column({ comment: '标签名' })
    name: string;

    @Column({ comment: '标签详情' })
    detail: string;

    @Column({ comment: '话题数量', field: 'topic_count' })
    topicCount: number;

    @Column({ comment: '图标' })
    icon: string;

    @Default(false)
    @Column({ comment: '是否显示图标', field: 'is_show_icon' })
    isShowIcon: string;

    @Default(NOW)
    @Column({ field: 'created_at' })
    createdAt: Date;

    @Default(NOW)
    @Column({ field: 'updated_at' })
    updatedAt: Date;

    @Column({ field: 'deleted_at' })
    deletedAt: Date;
}

export const NodeModelProvider = getProviderByModel(Node);
