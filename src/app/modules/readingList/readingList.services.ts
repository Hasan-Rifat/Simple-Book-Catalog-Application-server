import { IReadingList } from './readingList.interface';
import { ReadingList } from './readingList.model';
const createReadingList = async (
  payload: IReadingList
): Promise<IReadingList> => {
  const createdBook = await (
    await ReadingList.create(payload)
  ).populate('bookId');
  return createdBook;
};

const getAllReadingList = async (): Promise<IReadingList[]> => {
  const books = await ReadingList.find().populate('bookId');
  return books;
};

const getReadingListByEmail = async (
  email: string
): Promise<IReadingList[]> => {
  const books = await ReadingList.find({ email }).populate('bookId');
  return books;
};

const getSingleReadingList = async (
  id: string
): Promise<IReadingList | null> => {
  const book = await ReadingList.findById(id).populate('bookId');
  return book;
};

const updateReadingList = async (email: string, payload: IReadingList) => {
  const book = await ReadingList.updateOne(
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

const deleteReadingList = async (id: string): Promise<IReadingList | null> => {
  console.log(id);
  const book = await ReadingList.findByIdAndDelete(id).populate('bookId');
  return book;
};

export const ReadingListService = {
  createReadingList,
  getAllReadingList,
  getSingleReadingList,
  updateReadingList,
  deleteReadingList,
  getReadingListByEmail,
};
