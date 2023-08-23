import { z } from 'zod';

const createWishListZodSchema = z.object({
  body: z.object({
    bookId: z.string({
      required_error: 'bookId is required',
    }),
    email: z.string({
      required_error: 'email is required',
    }),
  }),
});

const updateWishListZodSchema = z.object({
  body: z.object({
    bookId: z
      .string({
        required_error: 'bookId is required',
      })
      .optional(),
    email: z
      .string({
        required_error: 'email is required',
      })
      .optional(),
  }),
});

export const WishListValidation = {
  createWishListZodSchema,
  updateWishListZodSchema,
};
