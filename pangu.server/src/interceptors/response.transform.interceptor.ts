/**
 * 请求流拦截器
 *  统一返回前端数据格式
 * {
 *  code: {number}
 *  message: {string}
 *  data: {any}
 * }
 */

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable, NestInterceptor, CallHandler, ExecutionContext, HttpStatus } from '@nestjs/common';

export interface Response<T> {
    data: T;
}

@Injectable()
export class ResponseTransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> {
        const call$ = next.handle();
        return call$.pipe(
            map(data => {
                return { code: HttpStatus.OK, message: 'ok', data };
            })
        );
    }
}
