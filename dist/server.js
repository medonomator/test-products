"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hapi = __importStar(require("hapi"));
const Inert = __importStar(require("inert"));
const Vision = __importStar(require("vision"));
const logger_1 = require("./helpers/logger");
const autoUpdateEntitysData_1 = require("./helpers/autoUpdateEntitysData");
// Routes
const entitys_1 = __importDefault(require("./routes/entitys"));
const views_1 = __importDefault(require("./routes/views"));
class Server {
    constructor(port) {
        this.port = port;
    }
    async start() {
        try {
            const server = new Hapi.Server({
                port: this.port,
            });
            await server.register([Inert, Vision]);
            server.views({
                engines: {
                    hbs: require('handlebars'),
                },
                relativeTo: __dirname,
                partialsPath: 'views/partials',
                isCached: true,
                path: 'views',
                context: {
                    path: '../static/',
                },
            });
            server.route([...entitys_1.default, ...views_1.default]);
            await autoUpdateEntitysData_1.autoUpdateEntitysData();
            await server.start();
            logger_1.logger.info('Server running at:', server.info.uri);
        }
        catch (err) {
            logger_1.logger.error(`Server start error: `, err.message, err.stack);
        }
    }
}
exports.Server = Server;
exports.server = new Server(process.env.PORT || '5000');
exports.server.start();
process.on('unhandledRejection', (error) => {
    console.error(error.message);
    console.error(error.stack);
});
process.on('uncaughtException', (error) => {
    console.error(`uncaughtException ${error.message}`);
});
