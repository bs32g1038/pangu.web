import { Module } from '@nestjs/common';
import { NodeModelProvider } from '../../models/node.model';
import { NodeController } from './node.controller';
import { NodeService } from './node.service';

@Module({
    controllers: [NodeController],
    providers: [NodeModelProvider, NodeService],
})
export class NodeModule {}
