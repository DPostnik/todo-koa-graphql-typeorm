import {gql} from "apollo-server-koa";
import {makeExecutableSchema} from "graphql-tools";

const typeDefs = gql`
    type Card {
        id: String
        done: Boolean
    }
    
    type Query {
        cards: [Card]
    }
`;

const cards = [
    {id: '1', done: false},
    {id: '2', done: true},
]


const resolvers = {
    Query: {
        cards: () => cards,
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers: [resolvers]
})

export default schema;