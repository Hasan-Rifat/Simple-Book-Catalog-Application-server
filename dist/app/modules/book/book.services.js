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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const book_model_1 = require("./book.model");
const book_constant_1 = require("./book.constant");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const createBook = (book) => __awaiter(void 0, void 0, void 0, function* () {
    if (!book.title || !book.author) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Title and author are required.');
    }
    const createdBook = yield book_model_1.Book.create(book);
    return createdBook;
});
const getAllBooks = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: book_constant_1.BookSearchableFields.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: 'i',
                },
            })),
        });
    }
    // Filters needs $and to fullfill all the conditions
    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const books = yield book_model_1.Book.find(whereConditions);
    return books;
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.default.isValidObjectId(id)) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Invalid book ID.');
    }
    const book = yield book_model_1.Book.findById(id);
    return book;
});
const updateBook = (email, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.Book.updateOne({ email }, {
        $set: payload,
    }, { new: true });
    return book;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.default.isValidObjectId(id)) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Invalid book ID.');
    }
    const book = yield book_model_1.Book.findByIdAndDelete(id);
    return book;
});
exports.BookService = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
};
