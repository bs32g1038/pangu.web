import { Table, Column, Model, AutoIncrement, Default, BelongsTo } from 'sequelize-typescript';
import { NOW } from 'sequelize';
import { Tag } from './tag.model';
import { Topic } from './topic.model';
import { getProviderByModel } from '../utils/model.util';

@Table({
    tableName: 'pangu_topic_tag',
    freezeTableName: true,
    paranoid: true,
})
export class TopicTag extends Model<TopicTag> {
    @AutoIncrement
    @Column({ primaryKey: true })
    id: number;

    @BelongsTo(() => Tag, { as: 'tag', foreignKey: 'tagId' })
    @Column({ comment: '标签id', field: 'tag_id' })
    tagId: number;

    @BelongsTo(() => Topic, { as: 'topic', foreignKey: 'topic_id' })
    @Column({ comment: '文章id', field: 'topic_id' })
    topicId: number;

    @Default(NOW)
    @Column({ field: 'created_at' })
    createdAt: Date;

    @Default(NOW)
    @Column({ field: 'updated_at' })
    updatedAt: Date;

    @Column({ field: 'deleted_at' })
    deletedAt: Date;
}

export const TopicTagModelProvider = getProviderByModel(TopicTag);
