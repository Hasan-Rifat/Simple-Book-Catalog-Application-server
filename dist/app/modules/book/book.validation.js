"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
const createBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }),
        author: zod_1.z.string({
            required_error: "Author is required",
        }),
        genre: zod_1.z.string({
            required_error: "Genre is required",
        }),
        publicationDate: zod_1.z.string({
            required_error: "Publication date is required",
        }),
        reviews: zod_1.z.array(zod_1.z.string({
            required_error: "Reviews is required",
        })),
    }),
});
const updateBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: "Title is required",
        })
            .optional(),
        author: zod_1.z
            .string({
            required_error: "Author is required",
        })
            .optional(),
        genre: zod_1.z
            .string({
            required_error: "Genre is required",
        })
            .optional(),
        publicationDate: zod_1.z
            .string({
            required_error: "Publication date is required",
        })
            .optional(),
        reviews: zod_1.z
            .array(zod_1.z.string({
            required_error: "Reviews is required",
        }))
            .optional(),
    }),
});
exports.BookValidation = {
    createBookZodSchema,
    updateBookZodSchema,
};
