// import { CreateCatDto } from './dto/create-cat.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '../../utils/model.util';
import { User } from '../../models/user.model';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly USER_REPOSITORY: typeof User) {}

    async findAll(): Promise<User[]> {
        return await this.USER_REPOSITORY.findAll<User>({
            attributes: { exclude: ['password', 'email'] },
            order: [['updatedAt', 'DESC']],
            limit: 10,
        });
    }
}
