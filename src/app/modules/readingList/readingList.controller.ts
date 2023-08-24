import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ReadingListService } from './readingList.services';
import { IReadingList } from './readingList.interface';

const createReadingList = catchAsync(async (req, res) => {
  const result = await ReadingListService.createReadingList(req.body);

  sendResponse<IReadingList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ReadingList created successfully',
    data: result,
  });
});

const getAllReadingList = catchAsync(async (req, res) => {
  const result = await ReadingListService.getAllReadingList();

  sendResponse<IReadingList[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ReadingLists fetched successfully',
    data: result,
  });
});
const getReadingListByEmail = catchAsync(async (req, res) => {
  const result = await ReadingListService.getReadingListByEmail(
    req.params.email
  );

  sendResponse<IReadingList[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ReadingLists fetched successfully',
    data: result,
  });
});

const getSingleReadingList = catchAsync(async (req, res) => {
  const result = await ReadingListService.getSingleReadingList(req.params.id);

  sendResponse<IReadingList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ReadingList fetched successfully',
    data: result,
  });
});

const updateReadingList = catchAsync(async (req, res) => {
  const result = await ReadingListService.updateReadingList(
    req.params.id,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ReadingList updated successfully',
    data: result,
  });
});

const deleteReadingList = catchAsync(async (req, res) => {
  const result = await ReadingListService.deleteReadingList(req.params.id);

  sendResponse<IReadingList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ReadingList deleted successfully',
    data: result,
  });
});

export const ReadingListController = {
  createReadingList,
  getAllReadingList,
  getSingleReadingList,
  updateReadingList,
  deleteReadingList,
  getReadingListByEmail,
};
