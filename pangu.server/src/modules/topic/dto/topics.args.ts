import { IsInt, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class TopicsArgsFilter {
    tab: string;
    nodeId: string;
    userId: string;
}

export class TopicsArgs {
    @IsInt()
    @Min(0)
    @Type(() => Number)
    readonly page: number = 1;

    @IsInt()
    @Min(1)
    @Max(50)
    @Type(() => Number)
    readonly limit = 20;

    tab?: string;

    nodeId?: string;

    userId?: string;
}
