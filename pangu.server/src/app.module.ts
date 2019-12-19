import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TopicModule } from './modules/topic/topic.module';
import { NodeModule } from './modules/node/node.module';
import { UserModule } from './modules/user/user.module';
import { UploadModule } from './modules/upload/upload.module';

@Module({
    imports: [DatabaseModule, TopicModule, NodeModule, UserModule, UploadModule],
})
export class AppModule {}
