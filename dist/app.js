"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const data_source_1 = require("./data-source");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: '1mb' }));
app.use((0, cors_1.default)({
    origin: '*',
}));
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.AppDataSource.getRepository('User').find();
    res.json(users);
}));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = app;
