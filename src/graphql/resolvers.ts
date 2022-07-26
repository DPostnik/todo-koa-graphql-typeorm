import {cardResolver} from "./resolvers/card";
import {cardsResolver} from "./resolvers/cards";
import {createCardMutation} from "./mutations/create-card";

export const resolvers = {
    Query: {
        ...cardResolver,
        ...cardsResolver,
    },
    Mutation: {
        ...createCardMutation,
    }
}