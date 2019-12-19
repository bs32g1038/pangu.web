import { UnauthorizedException, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../models/user.model';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('/v1/api')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/getActiveUserList')
    async getActiveUserList(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post('/user/login')
    async userLogin(@Body() body): Promise<User> {
        const user = await this.userService.login(body.email, body.password);
        if (!user) {
            throw new UnauthorizedException('账号或者密码错误!');
        }
        return user;
    }
}
