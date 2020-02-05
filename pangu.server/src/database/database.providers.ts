import { Sequelize } from 'sequelize-typescript';
import { Follow } from '../models/follow.model';
import { Tag } from '../models/tag.model';
import { TopicTag } from '../models/topic.tag.model';
import { Category } from '../models/category.model';
import { Recruit } from '../models/recruit.model';
import { Reply } from '../models/reply.model';
import { TopicCollect } from '../models/topic.collect.model';
import { Topic } from '../models/topic.model';
import { User } from '../models/user.model';

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'pangu_development',
    logging: function() {},
});

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            sequelize.addModels([Follow, Category, Tag, TopicTag, Recruit, Reply, Topic, TopicCollect, User]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
