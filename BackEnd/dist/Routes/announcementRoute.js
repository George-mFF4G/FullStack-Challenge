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
const announcementHandler_1 = require("../Handlers/announcementHandler");
const router = express_1.default.Router();
const operations = new announcementHandler_1.announcementStore();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = {
            name: req.body.name,
            date: req.body.date,
            text: req.body.text,
        };
        const newAnnouncement = yield operations.createAnnouncement(product);
        res.status(200).json(newAnnouncement);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const announcement = yield operations.announcementIndex();
        res.status(200).json(announcement);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const announcement = yield operations.announcementShow(req.params.id);
        res.status(200).json(announcement);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const announcement = {
            name: req.body.name,
            date: req.body.date,
            text: req.body.text,
        };
        const newAnnouncement = yield operations.announcementUpdate(announcement, req.params.id);
        res.status(200).json(newAnnouncement);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield operations.announcementDelete(req.params.id);
        res.status(200).json(deleted);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
exports.default = router;
