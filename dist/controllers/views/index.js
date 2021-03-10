"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boom_1 = __importDefault(require("boom"));
const logger_1 = require("../../helpers/logger");
const entitys_1 = __importDefault(require("../../models/redis/entitys"));
exports.getMainPage = async (req, h) => {
    try {
        const entitysData = await entitys_1.default.getAll();
        const composeValuesByColumn = {};
        const arrayFill = Array(20).fill(0);
        arrayFill.forEach((_, index) => {
            composeValuesByColumn[index] = [];
        });
        Object.keys(entitysData).forEach((entitys) => {
            Object.keys(entitysData[entitys]).forEach((parameter, idx) => {
                const value = entitysData[entitys][parameter];
                composeValuesByColumn[idx] = composeValuesByColumn[idx].concat(value);
            });
        });
        return h.view('index', {
            entitysData,
            composeValuesByColumn: JSON.stringify(composeValuesByColumn),
        });
    }
    catch (err) {
        logger_1.logger.error(err);
        return boom_1.default.badImplementation(err.message);
    }
};
