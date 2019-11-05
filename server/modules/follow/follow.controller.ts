import { FollowService } from './follow.service';
import { Follow } from '../../models/follow.model';
import { Controller, Get } from '@nestjs/common';

@Controller('/api')
export class FollowController {
    constructor(private readonly followService: FollowService) {}

    @Get('/articles')
    follows(): Promise<Follow[]> {
        return this.followService.findAll();
    }
}
