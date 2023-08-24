"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishList = void 0;
/* eslint-disable @typescript-eslint/no-this-alias */
const mongoose_1 = require("mongoose");
const ReadingListSchema = new mongoose_1.Schema({
    bookId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});
exports.WishList = (0, mongoose_1.model)('WishList', ReadingListSchema);
