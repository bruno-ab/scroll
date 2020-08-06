"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongooseAggregatePaginate = require('mongoose-aggregate-paginate');
var model_1 = __importDefault(require("./model"));
var userSchema = new mongoose_1.Schema(model_1.default, {
    timestamps: true
});
// Plugins
userSchema.plugin(mongooseAggregatePaginate);
var UserSChema = mongoose_1.model('user-model', userSchema);
exports.default = UserSChema;
