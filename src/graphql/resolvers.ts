import { cardResolver } from './resolvers/card';
import { cardsResolver } from './resolvers/cards';
import { createCardMutation } from './mutations/create-card';
import { updateCardMutation } from './mutations/update-card';
import { deleteCardMutation } from './mutations/delete-card';

export const resolvers = {
  Query: {
    ...cardResolver,
    ...cardsResolver,
  },
  Mutation: {
    ...createCardMutation,
    ...updateCardMutation,
    ...deleteCardMutation,
  },
};
