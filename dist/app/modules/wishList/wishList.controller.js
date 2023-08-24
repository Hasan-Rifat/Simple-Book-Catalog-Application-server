"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const wishList_services_1 = require("./wishList.services");
const createWishList = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishList_services_1.WishListService.createWishList(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'WishList created successfully',
        data: result,
    });
}));
const getAllWishList = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishList_services_1.WishListService.getAllWishList();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'WishList fetched successfully',
        data: result,
    });
}));
const getWishListByEmail = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishList_services_1.WishListService.getWishListByEmail(req.params.email);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'WishList fetched successfully',
        data: result,
    });
}));
const getSingleWishList = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishList_services_1.WishListService.getSingleWishList(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'WishList fetched successfully',
        data: result,
    });
}));
const updateWishList = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishList_services_1.WishListService.updateWishList(req.params.email, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'WishList updated successfully',
        data: result,
    });
}));
const deleteWishList = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishList_services_1.WishListService.deleteWishList(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'WishList deleted successfully',
        data: result,
    });
}));
exports.WishListController = {
    createWishList,
    getAllWishList,
    getSingleWishList,
    updateWishList,
    deleteWishList,
    getWishListByEmail,
};
