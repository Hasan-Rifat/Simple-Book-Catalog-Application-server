"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListValidation = void 0;
const zod_1 = require("zod");
const createWishListZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        bookId: zod_1.z.string({
            required_error: 'bookId is required',
        }),
        email: zod_1.z.string({
            required_error: 'email is required',
        }),
    }),
});
const updateWishListZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        bookId: zod_1.z
            .string({
            required_error: 'bookId is required',
        })
            .optional(),
        email: zod_1.z
            .string({
            required_error: 'email is required',
        })
            .optional(),
    }),
});
exports.WishListValidation = {
    createWishListZodSchema,
    updateWishListZodSchema,
};
