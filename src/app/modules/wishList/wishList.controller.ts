import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { WishListService } from './wishList.services';
import { IWishList } from './wishList.interface';

const createWishList = catchAsync(async (req, res) => {
  const result = await WishListService.createWishList(req.body);

  sendResponse<IWishList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'WishList created successfully',
    data: result,
  });
});

const getAllWishList = catchAsync(async (req, res) => {
  const result = await WishListService.getAllWishList();

  sendResponse<IWishList[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'WishList fetched successfully',
    data: result,
  });
});

const getSingleWishList = catchAsync(async (req, res) => {
  const result = await WishListService.getSingleWishList(req.params.id);

  sendResponse<IWishList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'WishList fetched successfully',
    data: result,
  });
});

const updateWishList = catchAsync(async (req, res) => {
  const result = await WishListService.updateWishList(
    req.params.email,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'WishList updated successfully',
    data: result,
  });
});

const deleteWishList = catchAsync(async (req, res) => {
  const result = await WishListService.deleteWishList(req.params.id);

  sendResponse<IWishList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'WishList deleted successfully',
    data: result,
  });
});

export const WishListController = {
  createWishList,
  getAllWishList,
  getSingleWishList,
  updateWishList,
  deleteWishList,
};
