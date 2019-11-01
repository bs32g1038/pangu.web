import { NotFoundException } from '@nestjs/common';
import { UserLoginInput } from './dto/user.login.input';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserType } from '../topic/graphql.type';
import { UserService } from './user.service';
import { User } from '../../models/user.model';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [UserType])
    users(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Mutation(() => UserType)
    async login(@Args('userLoginInput') userLoginInput: UserLoginInput): Promise<User> {
        return await this.userService.login(userLoginInput.email, userLoginInput.password);
    }
}
