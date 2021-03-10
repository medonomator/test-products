"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("../../database/redis");
const CONFIG = __importStar(require("../../config"));
/**
 * Redis Entitys
 */
class Entitys {
    async set(entity, parameter, value) {
        const key = `${entity}:${parameter}`;
        await redis_1.redisClient.set(key, value);
    }
    async get(entity) {
        var e_1, _a;
        const composeEntity = {
            [entity]: {},
        };
        try {
            for (var _b = __asyncValues(CONFIG.parameterNames), _c; _c = await _b.next(), !_c.done;) {
                const parameter = _c.value;
                const key = `${entity}:${parameter}`;
                const value = await redis_1.redisClient.get(key);
                composeEntity[entity][parameter] = value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return composeEntity;
    }
    async getAll() {
        var e_2, _a, e_3, _b;
        const composeEntitys = {};
        try {
            for (var _c = __asyncValues(CONFIG.entitysNames), _d; _d = await _c.next(), !_d.done;) {
                const entity = _d.value;
                composeEntitys[entity] = {};
                try {
                    for (var _e = __asyncValues(CONFIG.parameterNames), _f; _f = await _e.next(), !_f.done;) {
                        const parameter = _f.value;
                        const key = `${entity}:${parameter}`;
                        const value = await redis_1.redisClient.get(key);
                        composeEntitys[entity][parameter] = value;
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) await _b.call(_e);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) await _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return composeEntitys;
    }
}
exports.default = new Entitys();
