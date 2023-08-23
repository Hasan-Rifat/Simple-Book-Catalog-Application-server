import { Model } from 'mongoose';

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: string[];
  email: string;
};

export type BookModel = Model<IBook, Record<string, unknown>>;

export type IBookFilters = {
  title?: string;
  author?: string;
  genre?: string;
  publicationDate?: string;
  email?: string;
  searchTerm?: string;
};
