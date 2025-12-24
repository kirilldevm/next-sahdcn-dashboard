import z from 'zod';

export const signUpSchema = z
  .object({
    email: z.email().min(1, { message: 'Email is required' }),
    accountType: z.enum(['personal', 'company']),
    companyName: z.string().optional(),
    employees: z.number().optional(),
    dob: z
      .date({ error: 'Date of birth is required' })
      .optional()
      .refine(
        (date) => {
          const today = new Date();
          const eighteenYearsAgo = new Date(
            today.getFullYear() - 18,
            today.getMonth(),
            today.getDate()
          );

          if (!date) {
            return false;
          }

          return date <= eighteenYearsAgo;
        },
        { message: 'You must be at least 18 years old' }
      )
      .refine((date) => date instanceof Date, { message: 'Invalid date' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .refine((password) => /[A-Z]/.test(password), {
        message: 'Password must contain at least one uppercase letter',
      })
      .refine((password) => /^(?=.*[!@#$%^&*])/g.test(password), {
        message: 'Password must contain at least one special character',
      }),
    confirmPassword: z.string(),
    acceptTerms: z.boolean().refine((value) => value, {
      message: 'You must accept the terms and conditions',
    }),
  })
  .superRefine((data, ctx) => {
    if (data.accountType === 'company') {
      if (!data.companyName) {
        ctx.addIssue({
          code: 'custom',
          message: 'Company name is required',
          path: ['companyName'],
        });
      }
      if (!data.employees || data.employees <= 0) {
        ctx.addIssue({
          code: 'custom',
          message: 'Number of employees is required',
          path: ['employees'],
        });
      }
    }
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
