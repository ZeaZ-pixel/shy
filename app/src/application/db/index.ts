import sequelize from './config';
import createModel from './models';

const startPostgresql = async () => {
  try {
    createModel();
    await sequelize.authenticate();
    if (process.env.NODE_ENV === 'dev') {
      await sequelize.sync({ alter: true, force: true });
    } else {
      await sequelize.sync({ alter: true });
    }

    console.log('DATA BASE CONNECTED');
  } catch (e) {
    console.log('DATA BASE ERROR', e);
  }
};

export default startPostgresql;
