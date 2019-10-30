import { Module } from '@nestjs/common';
import { DateScalar } from '../../common/scalars/date.scalar';
import { NodeModelProvider } from '../../models/node.model';
import { NodeResolver } from './node.resolver';
import { NodeService } from './node.service';

@Module({
    providers: [NodeModelProvider, NodeResolver, NodeService, DateScalar],
})
export class NodeModule {}
