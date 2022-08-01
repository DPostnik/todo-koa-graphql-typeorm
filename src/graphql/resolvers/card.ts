import { Card } from 'entities/card';
import { manager } from 'initializers/database';

export const cardResolver = {
  async card(obj, { id }) {
    const repository = manager.getRepository(Card);
    return await repository.findOne({ where: { id } });
  },
};
