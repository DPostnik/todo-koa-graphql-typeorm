import { Card } from 'entities/card';
import { manager } from 'initializers/database';

export const cardsResolver = {
    async cards() {
        const repository = manager.getRepository(Card);
        return await repository.find();
    }
};