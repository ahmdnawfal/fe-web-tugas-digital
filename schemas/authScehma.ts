import * as z from 'zod';

export const signupSchema = z.object({
  name: z.string().nonempty('Name is required').min(3, 'Minimum 3 character'),
  email: z.string().nonempty('Email is required').email('Email not valid'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(3, 'Minimum 3 character'),
});

export const signinSchema = z.object({
  email: z.string().nonempty('Email is required').email('Email not valid'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(3, 'Minimum 3 character'),
  rememberMe: z.boolean(),
});
