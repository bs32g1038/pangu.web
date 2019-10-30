import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NodeType } from '../topic/graphql.type';
import { NodeService } from './node.service';
import { Node } from '../../models/node.model';

@Resolver()
export class NodeResolver {
    constructor(private readonly nodeService: NodeService) {}

    @Query(() => [NodeType])
    nodes(): Promise<Node[]> {
        return this.nodeService.findAll();
    }
}
