import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TopicModule } from './modules/topic/topic.module';
import { TagModule } from './modules/tag/tag.module';
import { CategoryModule } from './modules/category/category.module';
import { UserModule } from './modules/user/user.module';
import { UploadModule } from './modules/upload/upload.module';
import { FollowModule } from './modules/follow/follow.module';
import { ReplyModule } from './modules/reply/reply.module';

@Module({
    imports: [
        DatabaseModule,
        TopicModule,
        TagModule,
        CategoryModule,
        UserModule,
        UploadModule,
        FollowModule,
        ReplyModule,
    ],
})
export class AppModule {}
