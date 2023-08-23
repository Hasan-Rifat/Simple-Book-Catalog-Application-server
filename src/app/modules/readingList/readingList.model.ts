/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { IReadingList, ReadingListModel } from './readingList.interface';

const ReadingListSchema = new Schema<IReadingList, ReadingListModel>({
  status: {
    type: Boolean,
    default: false,
    required: true,
  },
  bookId: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export const ReadingList = model<IReadingList, ReadingListModel>(
  'ReadingList',
  ReadingListSchema
);
