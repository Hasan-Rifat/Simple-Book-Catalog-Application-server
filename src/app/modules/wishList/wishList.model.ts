/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { IWishList, WishListModel } from './wishList.interface';

const ReadingListSchema = new Schema<IWishList, WishListModel>({
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

export const WishList = model<IWishList, WishListModel>(
  'WishList',
  ReadingListSchema
);
