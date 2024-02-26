import express, { Request, Response } from 'express';
import { quizStore } from '../Handlers/quizHandler';
import { IQuiz } from './../Models/quizModel';

const router = express.Router();
const operations = new quizStore();

router.post('/', async (req: Request, res: Response) => {
  try {
    const quiz: IQuiz = {
      title: req.body.title,
      due: req.body.due,
      course: req.body.course,
      topic: req.body.topic,
    };
    const newQuiz = await operations.createQuiz(quiz);
    res.status(200).json(newQuiz);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const quiz = await operations.quizIndex();
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const quiz = await operations.quizShow(req.params.id);
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const quiz: IQuiz = {
      title: req.body.title,
      due: req.body.due,
      course: req.body.course,
      topic: req.body.topic,
    };
    const newQuiz = await operations.quizUpdate(quiz, req.params.id);
    res.status(200).json(newQuiz);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deleted = await operations.quizDelete(req.params.id);
    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
