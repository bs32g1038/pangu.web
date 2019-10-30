import { Sequelize } from 'sequelize-typescript';
import { Follow } from '../models/follow.model';
import { Node } from '../models/node.model';
import { Recruit } from '../models/recruit.model';
import { Reply } from '../models/reply.model';
import { TopicCollect } from '../models/topic.collect.model';
import { Topic } from '../models/topic.model';
import { User } from '../models/user.model';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '123456',
                database: 'pangu_development',
            });
            sequelize.addModels([Follow, Node, Recruit, Reply, Topic, TopicCollect, User]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
