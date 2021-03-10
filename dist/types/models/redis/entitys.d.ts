import { IEntity } from '../../interfaces/entity';
/**
 * Redis Entitys
 */
declare class Entitys {
    set(entity: string, parameter: string, value: number): Promise<void>;
    get(entity: string): Promise<IEntity>;
    getAll(): Promise<IEntity>;
}
declare const _default: Entitys;
export default _default;
