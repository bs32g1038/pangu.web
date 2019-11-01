import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class UserLoginInput {
    @Field()
    @MaxLength(30)
    email: string;

    @Field()
    @MaxLength(30)
    password: string;
}
