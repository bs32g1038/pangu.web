// import { CreateCatDto } from './dto/create-cat.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '../../utils/model.util';
import { Node } from '../../models/node.model';

@Injectable()
export class NodeService {
    constructor(@InjectModel(Node) private readonly NODE_REPOSITORY: typeof Node) {}

    async findAll(): Promise<Node[]> {
        return await this.NODE_REPOSITORY.findAll<Node>();
    }
}
