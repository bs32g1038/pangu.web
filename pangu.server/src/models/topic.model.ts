import { Table, Column, Model, AutoIncrement, Default, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { NOW } from 'sequelize';
import { User } from './user.model';
import { Tag } from './tag.model';
import { TopicTag } from './topic.tag.model';
import { Category } from './category.model';
import { Recruit } from './recruit.model';
import { getProviderByModel } from '../utils/model.util';

@Table({
    tableName: 'pangu_topic',
    freezeTableName: true,
})
export class Topic extends Model<Topic> {
    @AutoIncrement
    @Column({ primaryKey: true })
    id: number;

    @Column({ comment: '话题标题' })
    title: string;

    @Column({ comment: '话题内容' })
    content: string;

    @Default(false)
    @Column({ comment: '是否置顶' })
    top: boolean;

    @Default(false)
    @Column({ comment: '是否精华' })
    good: boolean;

    @Default(false)
    @Column({ comment: '是否锁定' })
    locked: boolean;

    @Default(0)
    @Column({ comment: '浏览数量', field: 'visit_count' })
    visitCount: number;

    @Default(0)
    @Column({ comment: '回复数量', field: 'reply_count' })
    replyCount: number;

    @Default(0)
    @Column({ comment: '收藏数量', field: 'collect_count' })
    collectCount: number;

    @Default(false)
    @Column({ comment: '内容是否是html文本，false为markdown文本，true为html文本', field: 'is_html' })
    isHtml: false;

    @BelongsTo(() => Category, { as: 'category', foreignKey: 'categoryId' })
    @Column({ comment: '分类id', field: 'category_id' })
    categoryId: number;

    @BelongsTo(() => Recruit, { as: 'recruitInfo', foreignKey: 'recruitId' })
    @Column({ comment: '招聘信息id', field: 'recruit_id' })
    recruitId: number;

    @BelongsTo(() => User, { as: 'user', foreignKey: 'userId' })
    @Column({ comment: '作者id', field: 'user_id' })
    userId: number;

    @BelongsTo(() => User, { as: 'lastReplyUser', foreignKey: 'lastReplyUserId' })
    @Column({ comment: '最后回复的用户的id', field: 'last_reply_user_id' })
    lastReplyUserId: number;

    @Column({ comment: '最后回复时间', field: 'last_replied_at' })
    lastRepliedAt: Date;

    @Default(NOW)
    @Column({ field: 'created_at' })
    createdAt: Date;

    @Default(NOW)
    @Column({ field: 'updated_at' })
    updatedAt: Date;

    @Column({ field: 'deleted_at' })
    deletedAt: Date;

    @BelongsToMany(
        () => Tag,
        () => TopicTag,
        'topicId',
        'tagId'
    )
    tags: Tag[];
}

export const TopicModelProvider = getProviderByModel(Topic);
