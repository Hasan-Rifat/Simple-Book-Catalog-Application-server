import { FilterQuery } from 'mongoose';
import { bookSearchableFields } from './book.constant';
import { IBook, IBookFilters } from './book.interface';
import { Book } from './book.model';

const createBook = async (book: IBook): Promise<IBook> => {
  const createdBook = Book.create(book);
  return createdBook;
};

const getAllBooks = async (filters: IBookFilters): Promise<IBook[]> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions: FilterQuery<IBook>[] = [];

  if (searchTerm) {
    andConditions.push({
      $or: bookSearchableFields.map(field => ({
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

  const books = Book.find(whereConditions);
  return books;
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const book = Book.findById(id);
  return book;
};

const updateBook = async (
  id: string,
  payload: IBook
): Promise<IBook | null> => {
  const book = Book.findByIdAndUpdate(id, payload, { new: true });
  return book;
};

const deleteBook = async (id: string): Promise<IBook | null> => {
  const book = Book.findByIdAndDelete(id);
  return book;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
