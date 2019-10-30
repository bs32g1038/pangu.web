import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TopicsArgs } from './dto/topics.args';
import { TopicType, PagedTopicsType } from './graphql.type';
import { TopicService } from './topic.service';
import { Topic } from '../../models/topic.model';

@Resolver(() => TopicType)
export class TopicResolver {
    constructor(private readonly topicService: TopicService) {}

    @Query(() => TopicType)
    async topic(@Args('id') id: string): Promise<Topic> {
        const topic = await this.topicService.findOneById(id);
        if (!topic) {
            throw new NotFoundException(id);
        }
        return topic;
    }

    @Query(() => [TopicType])
    topics(@Args() topicsArgs: TopicsArgs): Promise<Topic[]> {
        return this.topicService.findAll(topicsArgs);
    }

    @Query(() => PagedTopicsType)
    pagedTopics(@Args() topicsArgs: TopicsArgs) {
        return this.topicService.findAndCountAll(topicsArgs);
    }

    // @Mutation(returns => Recipe)
    // async addRecipe(@Args('newRecipeData') newRecipeData: NewRecipeInput): Promise<Recipe> {
    //     const recipe = await this.recipesService.create(newRecipeData);
    //     pubSub.publish('recipeAdded', { recipeAdded: recipe });
    //     return recipe;
    // }

    // @Mutation(returns => Boolean)
    // async removeRecipe(@Args('id') id: string) {
    //     return this.recipesService.remove(id);
    // }

    // @Subscription(returns => Recipe)
    // recipeAdded() {
    //     return pubSub.asyncIterator('recipeAdded');
    // }
}
