// import { CreateCatDto } from './dto/create-cat.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '../../utils/model.util';
import { User } from '../../models/user.model';
import * as config from '../../configs/default.config';
import Sequelize from 'sequelize';
import jwt from 'jsonwebtoken';

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
        return jwt.sign(obj, config.tokenKey, { expiresIn: '72h' });
    }

    verifyToken(token) {
        try {
            return jwt.verify(token, config.tokenKey);
        } catch (err) {
            return null;
        }
    }

    getUserInfoFromToken() {
        // const token = ctx.request.headers['authorization'];
        // return this.verifyToken(token);
    }
}
