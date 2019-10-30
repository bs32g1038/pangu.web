import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class NodeType {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    icon: string;

    @Field({ nullable: true })
    topicCount: number;
}
