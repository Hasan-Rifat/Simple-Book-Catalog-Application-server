import { IWishList } from './wishList.interface';
import { WishList } from './wishList.model';
const createWishList = async (payload: IWishList): Promise<IWishList> => {
  const createdBook = await (await WishList.create(payload)).populate('bookId');
  return createdBook;
};

const getAllWishList = async (): Promise<IWishList[]> => {
  const books = await WishList.find().populate('bookId');
  return books;
};

const getWishListByEmail = async (email: string): Promise<IWishList[]> => {
  const books = await WishList.find({ email }).populate('bookId');
  return books;
};

const getSingleWishList = async (id: string): Promise<IWishList | null> => {
  const book = await WishList.findById(id).populate('bookId');
  return book;
};

const updateWishList = async (email: string, payload: IWishList) => {
  const book = await WishList.updateOne(
    { email },
    {
      $set: payload,
    },
    {
      new: true,
    }
  ).populate('bookId');
  return book;
};

const deleteWishList = async (id: string): Promise<IWishList | null> => {
  console.log(id);
  const book = await WishList.findByIdAndDelete(id).populate('bookId');
  return book;
};

export const WishListService = {
  createWishList,
  getAllWishList,
  getSingleWishList,
  updateWishList,
  deleteWishList,
  getWishListByEmail,
};
