'use client';

import { PersonStandingIcon } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchema } from '@/schemas/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import Link from 'next/link';
import PasswordInput from '../ui/password-input';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data: LoginSchema) {
    console.log(data);
    router.push('/dashboard');
  }

  return (
    <>
      <PersonStandingIcon size={50} className='text-pink-500' />
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your SupportMe account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className='flex flex-col gap-4'
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='Email' type='email' {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the email address you used to sign up
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder='Password'
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit'>Log in</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className=''>
          <small>Don&apos;t have an account?</small>
          <Button asChild size={'sm'} variant={'link'}>
            <Link href={'/sign-up'}>Sign up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
