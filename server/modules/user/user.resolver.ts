import { NotFoundException } from '@nestjs/common';
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
}
