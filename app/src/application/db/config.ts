import { Dialect, Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DB_PASSWORD as string, {
  dialect: process.env.DB_DIALECT as Dialect,
  host: process.env.DB_HOST,
});

export default sequelize;
