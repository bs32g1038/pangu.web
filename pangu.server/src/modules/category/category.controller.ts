import { CategoryService } from './category.service';
import { Controller, Body, Get, Param, Post, Put } from '@nestjs/common';

@Controller('/v1/api')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get('/categories')
    async tags() {
        return this.categoryService.findAndCountAll();
    }

    @Get('/categories/:id')
    async getNodeById(@Param() params: { id: string }) {
        return await this.categoryService.getNodeById(params.id);
    }

    @Post('/categories')
    async create(@Body() body) {
        const name = body.name;
        const isShow = body.isShow;
        const detail = body.detail;
        const icon = body.icon;
        return await this.categoryService.create({
            name,
            detail,
            icon,
            isShow,
        });
    }

    @Put('/categories')
    async update(@Body() body) {
        const id = body.id;
        const name = body.name;
        const detail = body.detail;
        const icon = body.icon;
        const isShow = body.isShow;
        return await this.categoryService.update({
            id,
            name,
            detail,
            icon,
            isShow,
        });
    }
}
