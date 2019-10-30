import { Module } from '@nestjs/common';
import { DateScalar } from '../../common/scalars/date.scalar';
import { UserModelProvider } from '../../models/user.model';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    providers: [UserModelProvider, UserResolver, UserService, DateScalar],
})
export class UserModule {}
