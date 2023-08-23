/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../../config';

const UserSchema = new Schema<IUser, UserModel>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

UserSchema.statics.isUserExist = async function (
  email: string
): Promise<Pick<
  IUser,
  'email' | 'firstName' | 'lastName' | 'password'
> | null> {
  return await User.findOne(
    { email },
    {
      email: 1,
      firstName: 1,
      lastName: 1,
      password: 1,
    }
  );
};

UserSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

UserSchema.pre('save', async function (next) {
  // hash user password
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.salt_round));
  next();
});

export const User = model<IUser, UserModel>('User', UserSchema);
