import { Max, Min } from 'class-validator';
import { InputType, ArgsType, Field, Int } from 'type-graphql';

@InputType()
export class TopicsArgsFilter {
    @Field({ nullable: true })
    tab: string;

    @Field({ nullable: true })
    nodeId: string;

    @Field({ nullable: true })
    userId: string;
}

@ArgsType()
export class TopicsArgs {
    @Field(type => Int)
    @Min(0)
    page = 0;

    @Field(type => Int)
    @Min(1)
    @Max(50)
    limit = 25;

    @Field({ nullable: true })
    filter: TopicsArgsFilter;
}
