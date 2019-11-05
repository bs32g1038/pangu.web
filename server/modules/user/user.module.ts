import { Module } from '@nestjs/common';
import { UserModelProvider } from '../../models/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    providers: [UserModelProvider, UserController, UserService],
})
export class UserModule {}
