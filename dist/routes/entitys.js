"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = __importStar(require("joi"));
const entitysValidate_1 = require("./validate/entitysValidate");
const update_1 = require("../controllers/entitys/update");
const get_1 = require("../controllers/entitys/get");
const getAll_1 = require("../controllers/entitys/getAll");
const entityRoutes = [
    {
        method: 'PUT',
        path: '/entitys',
        handler: update_1.updateEntitys,
        options: {
            validate: {
                payload: entitysValidate_1.entitysValidate,
            },
        },
    },
    {
        method: 'GET',
        path: '/entitys/{entity}',
        handler: get_1.getEntity,
        options: {
            validate: {
                params: {
                    entity: Joi.string().trim(),
                },
            },
        },
    },
    {
        method: 'GET',
        path: '/entitys/getAll',
        handler: getAll_1.getEntitys,
    },
];
exports.default = entityRoutes;
