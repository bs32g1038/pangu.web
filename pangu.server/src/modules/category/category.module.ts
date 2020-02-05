import { Module } from '@nestjs/common';
import { CategoryModelProvider } from '../../models/category.model';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
    controllers: [CategoryController],
    providers: [CategoryModelProvider, CategoryService],
})
export class CategoryModule {}
