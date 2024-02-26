import { Announcement, IAnnouncement } from '../Models/announcementModel';

export class announcementStore {
  async createAnnouncement(
    announcement: IAnnouncement,
  ): Promise<IAnnouncement> {
    try {
      const newAnnouncement = await Announcement.create(announcement);
      return newAnnouncement;
    } catch (err) {
      throw new Error(`Cannot Create Announcement. ${err}.`);
    }
  }

  async announcementIndex(): Promise<IAnnouncement[]> {
    try {
      const newAnnouncement = await Announcement.find();
      return newAnnouncement;
    } catch (err) {
      throw new Error(`Cannot get all Announcements. ${err}.`);
    }
  }

  async announcementShow(id: string): Promise<IAnnouncement | null> {
    try {
      const newAnnouncement = await Announcement.findById(id);
      return newAnnouncement;
    } catch (err) {
      throw new Error(`Cannot get all Announcements. ${err}.`);
    }
  }

  async announcementUpdate(
    announcement: IAnnouncement,
    id: string,
  ): Promise<IAnnouncement | null> {
    try {
      const newAnnouncement = await Announcement.findByIdAndUpdate(
        id,
        announcement,
        {
          new: true,
        },
      );
      return newAnnouncement;
    } catch (err) {
      throw new Error(`Cannot update announcement Details. ${err}.`);
    }
  }
  async announcementDelete(id: string): Promise<IAnnouncement | null> {
    try {
      const newAnnouncement = await Announcement.findByIdAndDelete(id);
      return newAnnouncement;
    } catch (err) {
      throw new Error(`Cannot Delete The announcement. ${err}.`);
    }
  }
}
