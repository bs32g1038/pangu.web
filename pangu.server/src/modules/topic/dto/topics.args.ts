import { IsInt, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class TopicsArgsFilter {
    list: string; //表示分类id
    userId: string;
    good: boolean;
    order: string;
}

export class TopicsArgs {
    @IsInt()
    @Min(1)
    @Type(() => Number)
    readonly page: number = 1;

    @IsInt()
    @Min(1)
    @Max(50)
    @Type(() => Number)
    readonly limit = 20;

    good?: boolean;

    list?: string;

    userId?: string;

    order?: string;
}
