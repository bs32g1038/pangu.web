import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    public constructor(private readonly reflector: Reflector) {}

    public canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user: any = request.session.user;
        return user;
        // if (user) {
        //     return false;
        // }
        // const hasRole = () => user.roles.some((role: string) => roles.includes(role));
        // return user && user.roles && hasRole();
    }
}
