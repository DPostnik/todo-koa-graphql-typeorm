import { v4 as uuid } from 'uuid';
import { Card }          from 'entities/card';
import {manager} from "initializers/database";


export const createCardMutation = {
    async createCard(_, { card: attrs }) {
        const repository = manager.getRepository(Card);
        const card = {
            id: uuid(),
            ...attrs,
        };
        await repository.save(card);
        return card;
    }
};