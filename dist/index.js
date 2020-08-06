"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var connect_1 = require("./services/connect");
var routes_1 = require("./routes");
require("dotenv").config();
//require("./src/modules/services/connectDb");
var app = express_1.default();
connect_1.connect();
app.get('/', function (request, response) {
    return response.json({ message: 'Hello World' });
});
routes_1.allRoutes(app);
app.listen(3333, function () {
    console.log('scrolling at ... 3333');
});
