"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const port = process.env.PORT || 9090;
const expressServer = (0, express_1.default)();
const httpServer = http_1.default.createServer(expressServer);
const origins = ['http://localhost:3000', 'https://talkmiz.vercel.app'];
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: origins,
        credentials: true,
    },
});
expressServer.use(express_1.default.urlencoded({ extended: true }));
expressServer.use(express_1.default.json());
const users = [];
io.on('connection', (socket) => {
    console.log('connected');
    socket.on('send message', (message) => {
        const { username, text, id, date } = message;
        console.log({ message });
        io.emit('send message', { username, text, id, date });
    });
    socket.on('users', (user) => {
        users.push(user);
        io.emit('users', users);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
        users.pop();
    });
});
httpServer.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
