export const Mutation = `
    type Mutation {
        createCard(card: NewCard!): Card
        updateCard(id: String!, patch: CardPatch!): Card
        deleteCard(id: String!): Boolean
    }
`;
