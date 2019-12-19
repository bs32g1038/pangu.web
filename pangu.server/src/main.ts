import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from './pipes/validation.pipe';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ResponseTransformInterceptor } from './interceptors/response.transform.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import path from 'path';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalPipes(new ValidationPipe());
    app.useStaticAssets(path.resolve(__dirname, '../public'));
    app.useGlobalInterceptors(new ResponseTransformInterceptor(), new LoggingInterceptor());
    await app.listen(8000);
}

bootstrap();
