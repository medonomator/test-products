"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boom_1 = __importDefault(require("boom"));
const logger_1 = require("../../../helpers/logger");
const entitys_1 = __importDefault(require("../../../models/redis/entitys"));
/**
 * Get Entitys
 * @param {IParams} params
 * @return Promise<{IResponse}>
 */
exports.getEntitys = async () => {
    try {
        return entitys_1.default.getAll();
    }
    catch (err) {
        logger_1.logger.error(err);
        return boom_1.default.badImplementation(err.message);
    }
};
