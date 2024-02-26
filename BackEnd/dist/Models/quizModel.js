"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = exports.QuizSchema = void 0;
const mongoose_1 = require("mongoose");
// Schema
exports.QuizSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    due: { type: String, required: true },
    course: { type: String, required: true },
    topic: { type: String, required: true },
});
//  Create a Model.
exports.Quiz = (0, mongoose_1.model)('Quiz', exports.QuizSchema);
