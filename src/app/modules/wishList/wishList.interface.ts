/* eslint-disable no-unused-vars */
import { Model, Schema } from 'mongoose';
import { IBook } from '../book/book.interface';

export type IWishList = {
  bookId: Schema.Types.ObjectId | IBook;
  email: string;
};

export type WishListModel = Model<IWishList, Record<string, unknown>>;
