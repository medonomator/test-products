import Mongoose from 'mongoose';
import { logger } from '../helpers/logger';

const mongoConnection = async () => {
  try {
    await Mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
    logger.info('Mongo connected');
  } catch (error) {
    logger.error(error);
  }
};

export default mongoConnection;
