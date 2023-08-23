/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type IUser = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type UserModel = {
  isUserExist: (
    email: string
  ) => Promise<Pick<
    IUser,
    'email' | 'firstName' | 'lastName' | 'password'
  > | null>;
  isPasswordMatched: (
    givenPassword: string,
    savedPassword: string
  ) => Promise<boolean>;
} & Model<IUser>;
