import { Table, Column, Model, AutoIncrement, Default, BelongsTo } from 'sequelize-typescript';
import { NOW } from 'sequelize';
import { getProviderByModel } from '../utils/model.util';
import { Category } from './category.model';

@Table({
    tableName: 'pangu_tag',
    freezeTableName: true,
})
export class Tag extends Model<Tag> {
    @AutoIncrement
    @Column({ primaryKey: true })
    id: number;

    @Column({ comment: '标签名' })
    name: string;

    @Column({ comment: '标签描述' })
    description: string;

    @Default(0)
    @Column({ comment: '话题数量', field: 'topic_count' })
    topicCount: number;

    @Column({ comment: '图标' })
    icon: string;

    @BelongsTo(() => Category, { as: 'category', foreignKey: 'categoryId' })
    @Column({ comment: '分类id', field: 'category_id' })
    categoryId: number;

    @Default(true)
    @Column({ comment: '是否显示标签', field: 'is_show' })
    isShow: boolean;

    @Default(true)
    @Column({ comment: '是否显示图标', field: 'is_show_icon' })
    isShowIcon: boolean;

    @Default(NOW)
    @Column({ field: 'created_at' })
    createdAt: Date;

    @Default(NOW)
    @Column({ field: 'updated_at' })
    updatedAt: Date;

    @Column({ field: 'deleted_at' })
    deletedAt: Date;
}

export const TagModelProvider = getProviderByModel(Tag);
