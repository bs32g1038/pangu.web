import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { ApiException } from '../exceptions/api.exception';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        if (exception instanceof ApiException) {
            response.status(status).json({
                code: exception.getCode(),
                message: exception.getMessage(),
                data: null,
            });
        } else {
            response.status(status).json({
                code: status,
                message: exception.message.message,
                data: null,
            });
        }
    }
}
