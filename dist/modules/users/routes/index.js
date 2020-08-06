"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var get_1 = require("./get");
var UsersRoutes = express_1.Router();
UsersRoutes
    .get('/users', get_1.getUsers);
exports.default = UsersRoutes;
