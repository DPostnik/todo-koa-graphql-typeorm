import { makeExecutableSchema } from 'graphql-tools';
import { Query } from './types/query';
import { resolvers } from './resolvers';
import { types } from './types';
import { Mutation } from './types/mutation';

const schemaDefinition = `
    schema {
        query: Query
        mutation: Mutation
    }
`;

const typeDefs = [schemaDefinition, Query, types, Mutation];

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
