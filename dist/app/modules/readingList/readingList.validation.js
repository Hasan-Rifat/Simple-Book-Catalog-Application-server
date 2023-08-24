"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedingListValidation = void 0;
const zod_1 = require("zod");
const createRedingListZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z.boolean({
            required_error: 'Status is required',
        }),
        bookId: zod_1.z.string({
            required_error: 'bookId is required',
        }),
        email: zod_1.z.string({
            required_error: 'email is required',
        }),
    }),
});
const updateRedingListZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z
            .boolean({
            required_error: 'Status is required',
        })
            .optional(),
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
exports.RedingListValidation = {
    createRedingListZodSchema,
    updateRedingListZodSchema,
};
