import Boom from 'boom';
import { IEntity } from '../../../interfaces/entity';
export interface IParams {
    params: {
        entity: string;
    };
}
export declare type IResponse = IEntity | Boom;
