import Boom from 'boom';
import { logger } from '../../../helpers/logger';
import Entitys from '../../../models/redis/entitys';
import { IParams, IResponse } from './interfaces';
/**
 * Update Entitys
 * @param {IParams} params
 * @return Promise<{IResponse>
 */
export const updateEntitys = async (req: IParams): Promise<IResponse> => {
  try {
    Object.keys(req.payload).forEach((entity) => {
      Object.keys(req.payload[entity]).forEach(async (parameter) => {
        const value = req.payload[entity][parameter];
        await Entitys.set(entity, parameter, value);
      });
    });

    return 'ok';
  } catch (err) {
    logger.error(err);
    return Boom.badImplementation(err.message);
  }
};
