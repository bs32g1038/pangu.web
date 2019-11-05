import { Catch, HttpException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';

@Catch(HttpException)
export class GraphqlExceptionFilter implements GqlExceptionFilter {
    catch(exception: HttpException) {
        throw new Error(exception.message.message);
    }
}
