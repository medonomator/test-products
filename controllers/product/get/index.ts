import Boom from 'boom';
import { logger } from '../../../helpers/logger';
import Entitys from '../../../models/redis/entitys';
import { IParams, IResponse } from './interfaces';
/**
 * Get Entity
 * @param {IParams} params
 * @return Promise<{IResponse}>
 */
export const getEntity = async (req: IParams): Promise<IResponse> => {
  try {
    const { entity } = req.params;
    return Entitys.get(entity);
  } catch (err) {
    logger.error(err);
    return Boom.badImplementation(err.message);
  }
};
