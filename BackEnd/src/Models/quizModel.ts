import { Schema, model, Types } from 'mongoose';

// Model Interface
export interface IQuiz {
  _id?: Types.ObjectId;
  title: string;
  due: string;
  course: string;
  topic: string;
}

// Schema
export const QuizSchema = new Schema<IQuiz>({
  title: { type: String, required: true },
  due: { type: String, required: true },
  course: { type: String, required: true },
  topic: { type: String, required: true },
});

//  Create a Model.
export const Quiz = model<IQuiz>('Quiz', QuizSchema);
