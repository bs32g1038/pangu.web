import { Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class TopicsArgs {
    @Field(type => Int)
    @Min(0)
    page = 0;

    @Field(type => Int)
    @Min(1)
    @Max(50)
    limit = 25;
}
