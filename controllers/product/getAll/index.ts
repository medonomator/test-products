import Boom from 'boom';
import { logger } from '../../../helpers/logger';
import Entitys from '../../../models/redis/entitys';
import { IResponse } from './interfaces';
/**
 * Get Entitys
 * @param {IParams} params
 * @return Promise<{IResponse}>
 */
export const getEntitys = async (): Promise<IResponse> => {
  try {
    return Entitys.getAll();
  } catch (err) {
    logger.error(err);
    return Boom.badImplementation(err.message);
  }
};
