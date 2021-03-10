"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const asyncRedis = __importStar(require("async-redis"));
const logger_1 = require("../helpers/logger");
exports.redisClient = asyncRedis.createClient();
exports.redisClient.on("connect", () => logger_1.logger.info("Redis connected"));
exports.redisClient.on("error", (err) => logger_1.logger.error("Connect Redis Error " + err));
