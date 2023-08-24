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
exports.ReadingListService = void 0;
const readingList_model_1 = require("./readingList.model");
const createReadingList = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const createdBook = yield (yield readingList_model_1.ReadingList.create(payload)).populate('bookId');
    return createdBook;
});
const getAllReadingList = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield readingList_model_1.ReadingList.find().populate('bookId');
    return books;
});
const getReadingListByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield readingList_model_1.ReadingList.find({ email }).populate('bookId');
    return books;
});
const getSingleReadingList = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield readingList_model_1.ReadingList.findById(id).populate('bookId');
    return book;
});
const updateReadingList = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Use findOneAndUpdate to find and update the document.
    const book = yield readingList_model_1.ReadingList.findOneAndUpdate({ _id: id }, // Filter based on email and bookId
    payload, // Update payload
    {
        new: true, // To return the updated document
    }).populate('bookId'); // Populate the 'bookId' field in the updated document
    return book;
});
const deleteReadingList = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const book = yield readingList_model_1.ReadingList.findByIdAndDelete(id).populate('bookId');
    return book;
});
exports.ReadingListService = {
    createReadingList,
    getAllReadingList,
    getSingleReadingList,
    updateReadingList,
    deleteReadingList,
    getReadingListByEmail,
};
