import { Injectable } from '@nestjs/common';
import { InjectModel } from '../../utils/model.util';
import { Node } from '../../models/node.model';
import SE from 'sequelize';

@Injectable()
export class NodeService {
    constructor(@InjectModel(Node) private readonly NODE_REPOSITORY: typeof Node) {}

    async findAll(): Promise<Node[]> {
        return await this.NODE_REPOSITORY.findAll<Node>();
    }

    async create(data) {
        return this.NODE_REPOSITORY.create(data);
    }

    async update(data) {
        return this.NODE_REPOSITORY.update(
            {
                name: data.name,
                detail: data.detail,
                icon: data.icon,
            },
            { where: { id: data.id } }
        );
    }

    async getNodeById(id: string) {
        return this.NODE_REPOSITORY.findOne({
            where: {
                id: {
                    [SE.Op.eq]: id,
                },
            },
        });
    }
}
