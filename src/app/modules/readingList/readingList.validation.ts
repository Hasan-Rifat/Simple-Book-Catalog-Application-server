import { z } from 'zod';

const createRedingListZodSchema = z.object({
  body: z.object({
    status: z.boolean({
      required_error: 'Status is required',
    }),
    bookId: z.string({
      required_error: 'bookId is required',
    }),
    email: z.string({
      required_error: 'email is required',
    }),
  }),
});

const updateRedingListZodSchema = z.object({
  body: z.object({
    status: z
      .boolean({
        required_error: 'Status is required',
      })
      .optional(),
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

export const RedingListValidation = {
  createRedingListZodSchema,
  updateRedingListZodSchema,
};
