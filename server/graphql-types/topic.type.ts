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

@ObjectType()
export class TopicType {
    @Field(type => ID)
    id: string;

    @Field()
    title: string;

    @Field()
    content: string;

    @Field({ nullable: true })
    summary?: string;

    @Field()
    top: boolean;

    @Field()
    good: boolean;

    @Field()
    locked: boolean;

    @Field()
    visitCount: number;

    @Field()
    replyCount: number;

    @Field()
    collectCount: number;

    @Field()
    type: number;

    @Field()
    createdAt: Date;

    @Field()
    node: NodeType;
}
