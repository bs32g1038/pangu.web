// import { CreateCatDto } from './dto/create-cat.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '../../utils/model.util';
import { Follow } from '../../models/follow.model';

@Injectable()
export class FollowService {
    constructor(@InjectModel(Follow) private readonly FOLLOW_REPOSITORY: typeof Follow) {}

    async findAll(): Promise<Follow[]> {
        return await this.FOLLOW_REPOSITORY.findAll<Follow>({
            attributes: { exclude: ['password', 'email'] },
            order: [['updatedAt', 'DESC']],
            limit: 10,
        });
    }
}
