require('dotenv').config();
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Card } from 'entities/card';
import * as config from 'config';

const postgresConfig = config.get<{
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}>('postgresConfig');

const AppDataSource = new DataSource({
  type: 'postgres',
  ...postgresConfig,
  entities: [Card],
  logging: ['query', 'error'],
  synchronize: true,
});

const databaseInitializer = async () => {
  return await AppDataSource.initialize().then(() => {
    console.log('Database connection established');
  });
};

const manager = AppDataSource.manager;

export { manager, databaseInitializer };
