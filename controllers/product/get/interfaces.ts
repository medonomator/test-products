import Boom from 'boom';
import { IEntity } from '../../../interfaces/entity';

export interface IParams {
  params: {
    entity: string;
  };
}

export type IResponse = IEntity | Boom;
