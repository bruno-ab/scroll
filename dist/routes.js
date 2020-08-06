"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRoutes = void 0;
var index_1 = __importDefault(require("./modules/users/routes/index"));
var allRoutes = function (server) {
    server.use("/user", index_1.default);
};
exports.allRoutes = allRoutes;
