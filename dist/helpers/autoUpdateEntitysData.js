"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const logger_1 = require("../helpers/logger");
const helpers_1 = require("../helpers");
exports.autoUpdateEntitysData = async () => {
    try {
        setInterval(() => {
            request_1.default({
                url: 'http://localhost:5000/entitys',
                method: 'PUT',
                json: true,
                body: helpers_1.getRandomEntitys(),
            }, function (err) {
                if (err) {
                    logger_1.logger.error(err);
                }
            });
        }, 1000);
    }
    catch (error) {
        logger_1.logger.error(error);
    }
};
