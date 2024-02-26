import { Quiz, IQuiz } from '../Models/quizModel';

export class quizStore {
  async createQuiz(quiz: IQuiz): Promise<IQuiz> {
    try {
      const newQuiz = await Quiz.create(quiz);
      return newQuiz;
    } catch (err) {
      throw new Error(`Cannot Create Exam. ${err}.`);
    }
  }

  async quizIndex(): Promise<IQuiz[]> {
    try {
      const newQuiz = await Quiz.find();
      return newQuiz;
    } catch (err) {
      throw new Error(`Cannot get all Exams. ${err}.`);
    }
  }

  async quizShow(id: string): Promise<IQuiz | null> {
    try {
      const newQuiz = await Quiz.findById(id);
      return newQuiz;
    } catch (err) {
      throw new Error(`Cannot get all quiz. ${err}.`);
    }
  }

  async quizUpdate(quiz: IQuiz, id: string): Promise<IQuiz | null> {
    try {
      const newQuiz = await Quiz.findByIdAndUpdate(id, quiz, {
        new: true,
      });
      return newQuiz;
    } catch (err) {
      throw new Error(`Cannot update quiz Details. ${err}.`);
    }
  }
  async quizDelete(id: string): Promise<IQuiz | null> {
    try {
      const newQuiz = await Quiz.findByIdAndDelete(id);
      return newQuiz;
    } catch (err) {
      throw new Error(`Cannot Delete The quiz. ${err}.`);
    }
  }
}
