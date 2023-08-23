import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
const createUser = async (payload: IUser): Promise<IUser> => {
  const { email } = payload;

  const isUserExist = await User.isUserExist(email);

  if (isUserExist) {
    throw new ApiError(httpStatus.CONFLICT, 'User already exist');
  }

  const createdBook = User.create(payload);
  return createdBook;
};

const getAllUser = async (): Promise<IUser[]> => {
  const books = User.find();
  return books;
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const book = User.findById(id);
  return book;
};

const updateUser = async (
  id: string,
  payload: IUser
): Promise<IUser | null> => {
  const book = User.findByIdAndUpdate(id, payload, { new: true });
  return book;
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  const book = User.findByIdAndDelete(id);
  return book;
};

const userLogin = async (payload: IUser): Promise<IUser | null> => {
  const result = await User.isUserExist(payload.email);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  // check if password match
  if (
    result.password &&
    !(await User?.isPasswordMatched(payload.password, result?.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect password');
  }

  return result;
};

export const UserService = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  userLogin,
};
