import { NodeService } from './node.service';
import { Node } from '../../models/node.model';
import { Controller, Body, Get, Param, Post, Put } from '@nestjs/common';

@Controller('/v1/api')
export class NodeController {
    constructor(private readonly nodeService: NodeService) {}

    @Get('/nodes')
    async nodes(): Promise<Node[]> {
        return this.nodeService.findAll();
    }

    @Get('/nodes/:id')
    async getNodeById(@Param() params: { id: string }) {
        return await this.nodeService.getNodeById(params.id);
    }

    @Post('/nodes')
    async create(@Body() body) {
        const name = body.name;
        const detail = body.detail;
        const icon = body.icon;
        return await this.nodeService.create({
            name,
            detail,
            icon,
        });
    }

    @Put('/nodes/:id')
    async update(@Body() body) {
        const id = body.id;
        const name = body.name;
        const detail = body.detail;
        const icon = body.icon;
        return await this.nodeService.update({
            id,
            name,
            detail,
            icon,
        });
    }
}
