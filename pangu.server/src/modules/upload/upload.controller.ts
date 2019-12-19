import { Controller, Post, UseGuards, UseInterceptors, UploadedFile, Query } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import Joi from '@hapi/joi';

@Controller('')
export class UploadController {
    constructor(private readonly uploadService: UploadService) {}

    static parentIdSchema = Joi.object({
        parentId: Joi.string()
            .default('')
            .max(50)
            .allow(''),
    });

    @Post('/api/upload/image')
    @UseInterceptors(FileInterceptor('file'))
    async uploadSingalImage(@UploadedFile() file: any) {
        return await this.uploadService.uploadSingalImage(file);
    }
}
