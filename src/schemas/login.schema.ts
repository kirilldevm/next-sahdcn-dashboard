import z from 'zod';

export const loginSchema = z.object({
  email: z.email().min(1, { message: 'Email is required' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
