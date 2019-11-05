import { Max, Min } from 'class-validator';

export class TopicsArgsFilter {
    tab: string;
    nodeId: string;
    userId: string;
}

export class TopicsArgs {
    @Min(0)
    page = 0;

    @Min(1)
    @Max(50)
    limit = 25;

    filter?: TopicsArgsFilter;
}
