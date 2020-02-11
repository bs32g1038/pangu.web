import { UnauthorizedException, Body, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../models/user.model';
import { Controller, Get, Post, Request } from '@nestjs/common';

@Controller('/v1/api')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/getActiveUserList')
    async getActiveUserList() {
        return this.userService.findAll();
    }

    @Get('/users')
    async users() {
        return this.userService.findAll();
    }

    @Post('/user/register')
    async userRegister(@Body() body): Promise<User> {
        const user = await this.userService.register(body.email, body.password);
        if (!user) {
            throw new UnauthorizedException('账号或者密码错误!');
        }
        return user;
    }

    @Post('/user/login')
    async userLogin(@Request() req: any, @Body() body): Promise<User> {
        const user = await this.userService.login(body.email, body.password);
        if (!user) {
            throw new UnauthorizedException('账号或者密码错误!');
        }
        req.session.user = user;
        return user;
    }

    @Post('/user/logout')
    async userLogout(@Request() req: any) {
        req.session.user = null;
        return true;
    }

    @Get('/getUserByUserAccount')
    async getUserByUserAccount(@Request() req, @Query() query) {
        const account = query.account;
        const user = req.session.user;
        console.log(user);
        return await this.userService.getUserByUserAccount(account, user ? user.id : '');
    }

    @Get('/getUserByUserId')
    async getUserByUserId(@Request() req, @Query() query) {
        const id = query.id;
        return await this.userService.getUserByUserId(id);
    }

    @Post('/isLogin')
    async isLogin(@Request() req) {
        return !!req.session.user;
    }
}
