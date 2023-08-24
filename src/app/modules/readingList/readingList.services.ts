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
  const id = payload.bookId;

  // Use findOneAndUpdate to find and update the document.
  const book = await ReadingList.findOneAndUpdate(
    { email, bookId: id }, // Filter based on email and bookId
    payload, // Update payload
    {
      new: true, // To return the updated document
    }
  ).populate('bookId'); // Populate the 'bookId' field in the updated document

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
