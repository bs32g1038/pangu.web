import { Module } from '@nestjs/common';
import { TagModelProvider } from '../../models/tag.model';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
    controllers: [TagController],
    providers: [TagModelProvider, TagService],
})
export class TagModule {}
