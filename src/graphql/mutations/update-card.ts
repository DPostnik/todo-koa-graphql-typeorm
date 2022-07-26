import { Card }          from 'entities/card';
import {manager} from "initializers/database";


export const updateCardMutation = {
    async updateCard(_, { id, patch }) {
        const repository = manager.getRepository(Card);
        const card = await repository.findOne({ where: { id }});
        await repository.update(id, patch);
        return {
            ...card,
            ...patch,
        };
    }
};