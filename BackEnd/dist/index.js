"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const database_1 = require("./database");
const announcementRoute_1 = __importDefault(require("./Routes/announcementRoute"));
const quizRoute_1 = __importDefault(require("./Routes/quizRoute"));
(0, database_1.dbConnection)();
const port = process.env.PORT;
const app = (0, express_1.default)();
const address = `0.0.0.0:${port}`;
app.use(body_parser_1.default.json());
// Enable CORS for all routes
app.use((0, cors_1.default)());
app.use('/announcements', announcementRoute_1.default);
app.use('/quizes', quizRoute_1.default);
app.get('/test-api', (req, res) => {
    res.send('Server Works!');
});
app.listen(port || 5000, () => {
    console.log(`server started at localhost:${address}`);
});
exports.default = app;
