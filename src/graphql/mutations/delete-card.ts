import {Card} from 'entities/card';
import {manager} from "initializers/database";


export const deleteCardMutation = {
    async deleteCard(_, { id }) {
        const repository = manager.getRepository(Card);
        // const card = await repository.findOne({ where: { id }});
        return await repository.delete({ id })
    }
};