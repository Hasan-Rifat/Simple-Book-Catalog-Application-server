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
exports.UserService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const user_model_1 = require("./user.model");
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = payload;
    const isUserExist = yield user_model_1.User.isUserExist(email);
    if (isUserExist) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'User already exist');
    }
    const createdBook = yield user_model_1.User.create(payload);
    return createdBook;
});
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield user_model_1.User.find();
    return books;
});
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield user_model_1.User.findById(id);
    return book;
});
const updateUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield user_model_1.User.findByIdAndUpdate(id, payload, { new: true });
    return book;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield user_model_1.User.findByIdAndDelete(id);
    return book;
});
const userLogin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.isUserExist(payload.email);
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    // check if password match
    if (result.password &&
        !(yield (user_model_1.User === null || user_model_1.User === void 0 ? void 0 : user_model_1.User.isPasswordMatched(payload.password, result === null || result === void 0 ? void 0 : result.password)))) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Incorrect password');
    }
    return result;
});
exports.UserService = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
    userLogin,
};
