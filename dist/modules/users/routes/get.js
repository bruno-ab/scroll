"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
var getUsers = function (request, response) {
    console.log('getting users');
    try {
        var users = {
            'user1': 'Bruno Alves',
            'user2': 'Chinelo',
            'user3': 'Thainan Lib'
        };
        return request.status(200).json(users);
    }
    catch (err) {
        return request.status(400).json('Erro ao obter usuários');
    }
};
exports.getUsers = getUsers;
