import { Injectable } from '@nestjs/common';
import { InjectModel } from '../../utils/model.util';
import { Tag } from '../../models/tag.model';
import SE from 'sequelize';

@Injectable()
export class TagService {
    constructor(@InjectModel(Tag) private readonly NODE_REPOSITORY: typeof Tag) {}

    async findAndCountAll() {
        return await this.NODE_REPOSITORY.findAndCountAll<Tag>();
    }

    async create(data) {
        return this.NODE_REPOSITORY.create(data);
    }

    async update(data) {
        return this.NODE_REPOSITORY.update(
            {
                name: data.name,
                description: data.description,
                isShow: data.isShow,
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
