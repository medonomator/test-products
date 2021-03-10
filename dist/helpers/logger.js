"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pino = require('pino');
exports.logger = pino({
    prettyPrint: { colorize: true },
});
