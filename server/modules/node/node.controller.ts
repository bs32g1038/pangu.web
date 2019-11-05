import { NodeService } from './node.service';
import { Node } from '../../models/node.model';
import { Controller, Get } from '@nestjs/common';

@Controller('/v1/api')
export class NodeController {
    constructor(private readonly nodeService: NodeService) {}

    @Get('/nodes')
    async nodes(): Promise<Node[]> {
        return this.nodeService.findAll();
    }
}
