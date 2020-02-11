// import { CreateCatDto } from './dto/create-cat.dto';
import { Injectable, Post } from '@nestjs/common';
import { InjectModel } from '../../utils/model.util';
import { User } from '../../models/user.model';
import { Follow as FollowModel } from '../../models/follow.model';
import { TOKEN_SECRET_KEY } from '../../configs/index.config';
import Sequelize from 'sequelize';
import jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly USER_REPOSITORY: typeof User) {}

    async findAll(): Promise<{ rows: User[]; count: number }> {
        return await this.USER_REPOSITORY.findAndCountAll<User>({
            attributes: { exclude: ['password', 'email'] },
            order: [['updatedAt', 'DESC']],
            limit: 10,
        });
    }

    async register(email, password) {
        const user = {
            username: email.split('@')[0],
            account: email,
            email,
            password,
            avatar: '/test/log.jpg',
        };
        return this.USER_REPOSITORY.create(user);
    }

    async login(email, password) {
        return await this.USER_REPOSITORY.findOne({
            where: {
                email: {
                    [Sequelize.Op.eq]: email,
                },
                password: {
                    [Sequelize.Op.eq]: password,
                },
            },
        });
    }

    signToken(obj) {
        return jwt.sign(obj, TOKEN_SECRET_KEY, { expiresIn: '72h' });
    }

    verifyToken(token) {
        try {
            return jwt.verify(token, TOKEN_SECRET_KEY);
        } catch (err) {
            return null;
        }
    }

    getUserInfoFromToken(token) {
        return this.verifyToken(token);
    }

    async getUserByUserAccount(account, followUserId) {
        const user: any = await this.USER_REPOSITORY.findOne({
            where: {
                account: {
                    [Sequelize.Op.eq]: account,
                },
            },
        });
        if (user && followUserId) {
            const follow = await FollowModel.findOne({
                where: {
                    userId: {
                        [Sequelize.Op.eq]: user.id,
                    },
                    followUserId: {
                        [Sequelize.Op.eq]: followUserId,
                    },
                },
            });
            console.log(user.id, follow, followUserId);
            if (follow) {
                user.setDataValue('isFollow', true);
            }
        }
        return user;
    }

    async getUserByUserId(id) {
        return await this.USER_REPOSITORY.findOne({
            where: {
                id: {
                    [Sequelize.Op.eq]: id,
                },
            },
        });
    }
}
