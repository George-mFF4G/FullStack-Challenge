import express, { Request, Response } from 'express';
import { announcementStore } from '../Handlers/announcementHandler';
import { IAnnouncement } from './../Models/announcementModel';

const router = express.Router();
const operations = new announcementStore();

router.post('/', async (req: Request, res: Response) => {
  try {
    const product: IAnnouncement = {
      name: req.body.name,
      date: req.body.date,
      text: req.body.text,
    };
    const newAnnouncement = await operations.createAnnouncement(product);
    res.status(200).json(newAnnouncement);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const announcement = await operations.announcementIndex();
    res.status(200).json(announcement);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const announcement = await operations.announcementShow(req.params.id);
    res.status(200).json(announcement);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const announcement: IAnnouncement = {
      name: req.body.name,
      date: req.body.date,
      text: req.body.text,
    };
    const newAnnouncement = await operations.announcementUpdate(
      announcement,
      req.params.id,
    );
    res.status(200).json(newAnnouncement);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deleted = await operations.announcementDelete(req.params.id);
    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
