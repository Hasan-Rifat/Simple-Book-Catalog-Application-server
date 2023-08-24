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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListService = void 0;
const wishList_model_1 = require("./wishList.model");
const createWishList = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const createdBook = yield (yield wishList_model_1.WishList.create(payload)).populate('bookId');
    return createdBook;
});
const getAllWishList = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield wishList_model_1.WishList.find().populate('bookId');
    return books;
});
const getWishListByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield wishList_model_1.WishList.find({ email }).populate('bookId');
    return books;
});
const getSingleWishList = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield wishList_model_1.WishList.findById(id).populate('bookId');
    return book;
});
const updateWishList = (email, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield wishList_model_1.WishList.updateOne({ email }, {
        $set: payload,
    }, {
        new: true,
    }).populate('bookId');
    return book;
});
const deleteWishList = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const book = yield wishList_model_1.WishList.findByIdAndDelete(id).populate('bookId');
    return book;
});
exports.WishListService = {
    createWishList,
    getAllWishList,
    getSingleWishList,
    updateWishList,
    deleteWishList,
    getWishListByEmail,
};
