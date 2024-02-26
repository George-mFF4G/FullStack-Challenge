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
exports.announcementStore = void 0;
const announcementModel_1 = require("../Models/announcementModel");
class announcementStore {
    createAnnouncement(announcement) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newAnnouncement = yield announcementModel_1.Announcement.create(announcement);
                return newAnnouncement;
            }
            catch (err) {
                throw new Error(`Cannot Create Announcement. ${err}.`);
            }
        });
    }
    announcementIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newAnnouncement = yield announcementModel_1.Announcement.find();
                return newAnnouncement;
            }
            catch (err) {
                throw new Error(`Cannot get all Announcements. ${err}.`);
            }
        });
    }
    announcementShow(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newAnnouncement = yield announcementModel_1.Announcement.findById(id);
                return newAnnouncement;
            }
            catch (err) {
                throw new Error(`Cannot get all Announcements. ${err}.`);
            }
        });
    }
    announcementUpdate(announcement, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newAnnouncement = yield announcementModel_1.Announcement.findByIdAndUpdate(id, announcement, {
                    new: true,
                });
                return newAnnouncement;
            }
            catch (err) {
                throw new Error(`Cannot update announcement Details. ${err}.`);
            }
        });
    }
    announcementDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newAnnouncement = yield announcementModel_1.Announcement.findByIdAndDelete(id);
                return newAnnouncement;
            }
            catch (err) {
                throw new Error(`Cannot Delete The announcement. ${err}.`);
            }
        });
    }
}
exports.announcementStore = announcementStore;
