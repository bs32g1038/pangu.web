import { Field, ID, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class NodeType {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    icon: string;

    @Field(() => Int)
    topicCount: number;
}
