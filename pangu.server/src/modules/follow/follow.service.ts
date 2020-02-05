import { Injectable } from '@nestjs/common';
import { InjectModel } from '../../utils/model.util';
import { Follow } from '../../models/follow.model';
import { User } from '../../models/user.model';

@Injectable()
export class FollowService {
    constructor(@InjectModel(Follow) private readonly FOLLOW_REPOSITORY: typeof Follow) {}

    async getFollowUsers(page = 1, limit = 100, option: { where?: any } = {}) {
        const offset = (page - 1) * 20;
        return this.FOLLOW_REPOSITORY.findAndCountAll({
            where: option.where,
            order: [['created_at', 'DESC']],
            limit,
            offset,
            include: [
                {
                    model: User,
                    required: true,
                    as: 'followUser',
                },
            ],
        });
    }

    async getFollowingUsers(page = 1, limit = 100, option: { where?: any } = {}) {
        const offset = (page - 1) * 20;
        return this.FOLLOW_REPOSITORY.findAndCountAll({
            where: option.where,
            order: [['created_at', 'DESC']],
            limit,
            offset,
            include: [
                {
                    model: User,
                    required: true,
                    as: 'user',
                },
            ],
        });
    }

    async follow(userId, followUserId) {
        const data: any = await this.FOLLOW_REPOSITORY.findOne({
            where: {
                userId,
                followUserId,
            },
            paranoid: false, // query and loads the soft deleted records
        });
        if (data) {
            if (data.isSoftDeleted()) {
                data.restore();
            }
            return data;
        }
        return this.FOLLOW_REPOSITORY.create({
            userId,
            followUserId,
        });
    }

    async cancelFollow(userId, followUserId) {
        return await this.FOLLOW_REPOSITORY.destroy({
            where: {
                userId,
                followUserId,
            },
        });
    }
}
