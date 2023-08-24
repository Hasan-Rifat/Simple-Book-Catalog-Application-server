import mongoose, { FilterQuery, UpdateWriteOpResult } from 'mongoose';
import { IBook, IBookFilters } from './book.interface';
import { Book } from './book.model';
import { BookSearchableFields } from './book.constant';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const createBook = async (book: IBook): Promise<IBook> => {
  if (!book.title || !book.author) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Title and author are required.'
    );
  }
  const createdBook = await Book.create(book);
  return createdBook;
};

const getAllBooks = async (filters: IBookFilters): Promise<IBook[]> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions: FilterQuery<IBook>[] = [];

  if (searchTerm) {
    andConditions.push({
      $or: BookSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  // Filters needs $and to fullfill all the conditions
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const books = await Book.find(whereConditions);
  return books;
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  if (!mongoose.isValidObjectId(id)) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid book ID.');
  }
  const book = await Book.findById(id);
  return book;
};

const updateBook = async (
  id: string,
  payload: IBook
): Promise<UpdateWriteOpResult> => {
  const book = await Book.updateOne(
    { _id: id },
    {
      $set: payload,
    },
    { new: true }
  );

  return book;
};

const deleteBook = async (id: string): Promise<IBook | null> => {
  if (!mongoose.isValidObjectId(id)) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid book ID.');
  }
  const book = await Book.findByIdAndDelete(id);
  return book;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
