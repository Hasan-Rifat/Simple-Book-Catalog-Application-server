import { IBook } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (book: IBook): Promise<IBook> => {
  const createdBook = Book.create(book);
  return createdBook;
};

const getAllBooks = async (): Promise<IBook[]> => {
  const books = Book.find();
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
