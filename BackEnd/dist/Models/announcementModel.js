"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Announcement = exports.AnnouncementSchema = void 0;
const mongoose_1 = require("mongoose");
// Schema
exports.AnnouncementSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    text: { type: String, required: true }
});
//  Create a Model.
exports.Announcement = (0, mongoose_1.model)('Announcement', exports.AnnouncementSchema);
