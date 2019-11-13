import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiErrorCode } from '../enums/api-error-code.enum';

export class ApiException extends HttpException {
    private code: ApiErrorCode;
    constructor(message: string, code: ApiErrorCode, statusCode: HttpStatus) {
        super(message, statusCode);
        this.code = code;
    }

    getCode(): ApiErrorCode {
        return this.code;
    }

    getMessage(): string {
        return this.message;
    }
}
