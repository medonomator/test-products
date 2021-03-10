import * as Vision from 'vision';
import * as Hapi from 'hapi';
import Boom from 'boom';
import { logger } from '../../helpers/logger';

export const getMainPage = async (req, h: Vision<Hapi.ResponseToolkit>) => {
  try {
    return h.view('index');
  } catch (err) {
    logger.error(err);
    return Boom.badImplementation(err.message);
  }
};
