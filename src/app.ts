import * as Koa from 'koa';
import { databaseInitializer } from 'initializers/database';
import * as config from "config";
const mount = require('koa-mount');
const { graphqlHTTP } = require('koa-graphql');
import {schema} from './graphql/schema';

const bootstrap = async () => {
    await databaseInitializer();

    const app = new Koa();

    app.use(
        mount(
            '/graphql',
            graphqlHTTP({
                schema,
                graphiql: true,
            }),
        ),
    );
    const port = config.get<number>('port');

    app.listen(port);
};

bootstrap().then();