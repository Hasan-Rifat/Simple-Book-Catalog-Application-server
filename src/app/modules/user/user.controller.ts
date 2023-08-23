import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.services';
import { IUser } from './user.interface';

const userLogin = catchAsync(async (req, res) => {
  const result = await UserService.userLogin(req.body);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    data: result,
  });
});

const createUser = catchAsync(async (req, res) => {
  const result = await UserService.createUser(req.body);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

const getAllUser = catchAsync(async (req, res) => {
  const result = await UserService.getAllUser();

  sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users fetched successfully',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const result = await UserService.getSingleUser(req.params.id);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const result = await UserService.updateUser(req.params.id, req.body);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const result = await UserService.deleteUser(req.params.id);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  userLogin,
};
