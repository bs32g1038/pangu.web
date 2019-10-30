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

@ObjectType()
export class UserType {
    @Field(() => ID)
    id: string;

    @Field()
    account: string;

    @Field()
    username: string;

    @Field()
    avatar: string;
}

@ObjectType()
export class TopicType {
    @Field(() => ID)
    id: string;

    @Field()
    title: string;

    @Field({ nullable: true })
    summary?: string;

    @Field()
    top: boolean;

    @Field()
    good: boolean;

    @Field()
    locked: boolean;

    @Field(() => Int)
    visitCount: number;

    @Field(() => Int)
    replyCount: number;

    @Field(() => Int)
    collectCount: number;

    @Field(() => Int)
    type: number;

    @Field()
    createdAt: Date;

    @Field()
    node: NodeType;

    @Field()
    user: UserType;

    @Field({ nullable: true })
    lastReplyUser?: UserType;
}

@ObjectType()
export class PagedTopicsType {
    @Field(() => [TopicType])
    rows: TopicType[];

    @Field()
    count: number;
}
