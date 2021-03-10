import * as Joi from 'joi';
declare const entityRoutes: ({
    method: string;
    path: string;
    handler: (req: import("../controllers/entitys/update/interfaces").IParams) => Promise<import("../controllers/entitys/update/interfaces").IResponse>;
    options: {
        validate: {
            payload: {
                entity1: Joi.ObjectSchema;
                entity2: Joi.ObjectSchema;
                entity3: Joi.ObjectSchema;
                entity4: Joi.ObjectSchema;
                entity5: Joi.ObjectSchema;
                entity6: Joi.ObjectSchema;
                entity7: Joi.ObjectSchema;
                entity8: Joi.ObjectSchema;
                entity9: Joi.ObjectSchema;
                entity10: Joi.ObjectSchema;
                entity11: Joi.ObjectSchema;
                entity12: Joi.ObjectSchema;
                entity13: Joi.ObjectSchema;
                entity14: Joi.ObjectSchema;
                entity15: Joi.ObjectSchema;
                entity16: Joi.ObjectSchema;
                entity17: Joi.ObjectSchema;
                entity18: Joi.ObjectSchema;
                entity19: Joi.ObjectSchema;
                entity20: Joi.ObjectSchema;
            };
            params?: undefined;
        };
    };
} | {
    method: string;
    path: string;
    handler: (req: import("../controllers/entitys/get/interfaces").IParams) => Promise<import("../controllers/entitys/get/interfaces").IResponse>;
    options: {
        validate: {
            params: {
                entity: Joi.StringSchema;
            };
            payload?: undefined;
        };
    };
} | {
    method: string;
    path: string;
    handler: () => Promise<import("../controllers/entitys/getAll/interfaces").IResponse>;
    options?: undefined;
})[];
export default entityRoutes;
