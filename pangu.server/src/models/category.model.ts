import { Table, Column, Model, AutoIncrement, Default } from 'sequelize-typescript';
import { NOW } from 'sequelize';
import { getProviderByModel } from '../utils/model.util';

@Table({
    tableName: 'pangu_category',
    freezeTableName: true,
})
export class Category extends Model<Category> {
    @AutoIncrement
    @Column({ primaryKey: true })
    id: number;

    @Column({ comment: '分类名' })
    name: string;

    @Column({ comment: '分类详情' })
    detail: string;

    @Default(0)
    @Column({ comment: '话题数量', field: 'topic_count' })
    topicCount: number;

    @Column({ comment: '图标' })
    icon: string;

    @Default(false)
    @Column({ comment: '是否显示分类', field: 'is_show' })
    isShow: boolean;

    @Default(false)
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

export const CategoryModelProvider = getProviderByModel(Category);
