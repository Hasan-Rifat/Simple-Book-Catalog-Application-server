/* eslint-disable no-unused-vars */
import { Model, Schema } from 'mongoose';
import { IBook } from '../book/book.interface';

export type IReadingList = {
  status: boolean;
  bookId: Schema.Types.ObjectId | IBook;
  email: string;
};

export type ReadingListModel = Model<IReadingList, Record<string, unknown>>;
