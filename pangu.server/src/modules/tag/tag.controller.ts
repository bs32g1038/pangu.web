import { TagService } from './tag.service';
import { Tag } from '../../models/tag.model';
import { Controller, Body, Get, Param, Post, Put } from '@nestjs/common';

@Controller('/v1/api')
export class TagController {
    constructor(private readonly tagService: TagService) {}

    @Get('/tags')
    async tags() {
        return this.tagService.findAndCountAll();
    }

    @Get('/tags/:id')
    async getNodeById(@Param() params: { id: string }) {
        return await this.tagService.getNodeById(params.id);
    }

    @Post('/tags')
    async create(@Body() body) {
        const name = body.name;
        const detail = body.detail;
        const icon = body.icon;
        return await this.tagService.create({
            name,
            detail,
            icon,
        });
    }

    @Put('/tags')
    async update(@Body() body) {
        const id = body.id;
        const name = body.name;
        const description = body.description;
        const icon = body.icon;
        return await this.tagService.update({
            id,
            name,
            description,
            icon,
        });
    }
}
