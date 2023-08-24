"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_router_1 = require("../modules/book/book.router");
const user_router_1 = require("../modules/user/user.router");
const readingList_router_1 = require("../modules/readingList/readingList.router");
const wishList_router_1 = require("../modules/wishList/wishList.router");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/book',
        router: book_router_1.BookRoutes,
    },
    {
        path: '/user',
        router: user_router_1.UserRoutes,
    },
    {
        path: '/reading-list',
        router: readingList_router_1.ReadingListRoutes,
    },
    {
        path: '/wish-list',
        router: wishList_router_1.WishListRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.router));
exports.default = router;
