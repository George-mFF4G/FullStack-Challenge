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
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizStore = void 0;
const quizModel_1 = require("../Models/quizModel");
class quizStore {
    createQuiz(quiz) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newQuiz = yield quizModel_1.Quiz.create(quiz);
                return newQuiz;
            }
            catch (err) {
                throw new Error(`Cannot Create Exam. ${err}.`);
            }
        });
    }
    quizIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newQuiz = yield quizModel_1.Quiz.find();
                return newQuiz;
            }
            catch (err) {
                throw new Error(`Cannot get all Exams. ${err}.`);
            }
        });
    }
    quizShow(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newQuiz = yield quizModel_1.Quiz.findById(id);
                return newQuiz;
            }
            catch (err) {
                throw new Error(`Cannot get all quiz. ${err}.`);
            }
        });
    }
    quizUpdate(quiz, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newQuiz = yield quizModel_1.Quiz.findByIdAndUpdate(id, quiz, {
                    new: true,
                });
                return newQuiz;
            }
            catch (err) {
                throw new Error(`Cannot update quiz Details. ${err}.`);
            }
        });
    }
    quizDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newQuiz = yield quizModel_1.Quiz.findByIdAndDelete(id);
                return newQuiz;
            }
            catch (err) {
                throw new Error(`Cannot Delete The quiz. ${err}.`);
            }
        });
    }
}
exports.quizStore = quizStore;
