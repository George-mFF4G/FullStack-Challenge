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
const express_1 = __importDefault(require("express"));
const quizHandler_1 = require("../Handlers/quizHandler");
const router = express_1.default.Router();
const operations = new quizHandler_1.quizStore();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quiz = {
            title: req.body.title,
            due: req.body.due,
            course: req.body.course,
            topic: req.body.topic,
        };
        const newQuiz = yield operations.createQuiz(quiz);
        res.status(200).json(newQuiz);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quiz = yield operations.quizIndex();
        res.status(200).json(quiz);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quiz = yield operations.quizShow(req.params.id);
        res.status(200).json(quiz);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quiz = {
            title: req.body.title,
            due: req.body.due,
            course: req.body.course,
            topic: req.body.topic,
        };
        const newQuiz = yield operations.quizUpdate(quiz, req.params.id);
        res.status(200).json(newQuiz);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield operations.quizDelete(req.params.id);
        res.status(200).json(deleted);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
exports.default = router;
