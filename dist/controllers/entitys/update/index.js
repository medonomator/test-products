"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boom_1 = __importDefault(require("boom"));
const logger_1 = require("../../../helpers/logger");
const entitys_1 = __importDefault(require("../../../models/redis/entitys"));
/**
 * Update Entitys
 * @param {IParams} params
 * @return Promise<{IResponse>
 */
exports.updateEntitys = async (req) => {
    try {
        Object.keys(req.payload).forEach((entity) => {
            Object.keys(req.payload[entity]).forEach(async (parameter) => {
                const value = req.payload[entity][parameter];
                await entitys_1.default.set(entity, parameter, value);
            });
        });
        return 'ok';
    }
    catch (err) {
        logger_1.logger.error(err);
        return boom_1.default.badImplementation(err.message);
    }
};
