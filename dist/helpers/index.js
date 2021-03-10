"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const CONFIG = __importStar(require("../config"));
const uuid = __importStar(require("uuid"));
exports.getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
};
exports.getRandomEntitys = () => {
    const composeEntity = {};
    CONFIG.entitysNames.forEach(() => {
        const randomCountEntity = Math.round(exports.getRandomNumber(0, 19));
        const randomEntity = CONFIG.entitysNames[randomCountEntity];
        composeEntity[randomEntity] = {
            id: uuid.v4(),
        };
        CONFIG.parameterNames.forEach(() => {
            const randomCountParameter = Math.round(exports.getRandomNumber(0, 19));
            const randomParameter = CONFIG.parameterNames[randomCountParameter];
            const randomNumber = exports.getRandomNumber(-1, 1).toString().slice(0, 6);
            composeEntity[randomEntity][randomParameter] = randomNumber;
        });
    });
    return composeEntity;
};
