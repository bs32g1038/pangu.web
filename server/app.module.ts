import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from './database/database.module';
import { TopicModule } from './modules/topic/topic.module';
import { NodeModule } from './modules/node/node.module';

@Module({
    imports: [
        DatabaseModule,
        TopicModule,
        NodeModule,
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
        }),
    ],
})
export class AppModule {}
