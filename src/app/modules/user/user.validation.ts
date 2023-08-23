import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
    firstName: z.string({
      required_error: 'First name is required',
    }),
    lastName: z.string({
      required_error: 'Last name is required',
    }),
  }),
});

const loginUserZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

const updateUserZodSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .optional(),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .optional(),
    firstName: z
      .string({
        required_error: 'First name is required',
      })
      .optional(),
    lastName: z
      .string({
        required_error: 'Last name is required',
      })
      .optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
  loginUserZodSchema,
  updateUserZodSchema,
};
