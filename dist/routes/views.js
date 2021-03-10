"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const views_1 = require("../controllers/views");
const viewsRoutes = [
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true,
                index: true,
            },
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: views_1.getMainPage,
    },
];
exports.default = viewsRoutes;
