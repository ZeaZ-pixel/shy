import sequelize from './config';
import createModel from './models';

const startPostgresql = async () => {
  try {
    await sequelize.authenticate();
    if (process.env.NODE_ENV === 'dev') {
      // createModel();
      await sequelize.sync({ alter: true, force: false });
    } else {
      await sequelize.sync({ alter: true, force: false });
    }
    console.log('DATA BASE CONNECTED');
  } catch (e) {
    console.log('DATA BASE ERROR', e);
  }
};

export default startPostgresql;
