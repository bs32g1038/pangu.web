import { Injectable } from '@nestjs/common';
import { InjectModel } from '../../utils/model.util';
import { Category } from '../../models/category.model';
import SE from 'sequelize';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category) private readonly CATEGORY_REPOSITORY: typeof Category) {}

    async findAndCountAll() {
        return await this.CATEGORY_REPOSITORY.findAndCountAll<Category>();
    }

    async create(data) {
        return this.CATEGORY_REPOSITORY.create(data);
    }

    async update(data) {
        return this.CATEGORY_REPOSITORY.update(
            {
                name: data.name,
                detail: data.detail,
                isShow: data.isShow,
                icon: data.icon,
            },
            { where: { id: data.id } }
        );
    }

    async getNodeById(id: string) {
        return this.CATEGORY_REPOSITORY.findOne({
            where: {
                id: {
                    [SE.Op.eq]: id,
                },
            },
        });
    }
}
