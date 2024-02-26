import { Schema, model, Types } from 'mongoose';

// Model Interface
export interface IAnnouncement {
  _id?: Types.ObjectId;
  name: string;
  date: string;
  text: string;
}

// Schema
export const AnnouncementSchema = new Schema<IAnnouncement>({
  name: { type: String, required: true },
  date: { type: String, required: true },
  text: { type: String, required: true },
});

//  Create a Model.
export const Announcement = model<IAnnouncement>(
  'Announcement',
  AnnouncementSchema,
);
