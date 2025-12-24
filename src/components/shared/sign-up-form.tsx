'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon, PersonStandingIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
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
import { signUpSchema, SignUpSchema } from '@/schemas/sign-up.schema';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar } from '../ui/calendar';
import { format } from 'date-fns';
import PasswordInput from '../ui/password-input';
import { Checkbox } from '../ui/checkbox';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
  const router = useRouter();

  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      accountType: 'personal',
      companyName: undefined,
      employees: undefined,
      dob: undefined,
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
  });

  const isCompany = form.watch('accountType') === 'company';

  function onSubmit(data: SignUpSchema) {
    console.log(data);
    router.push('/dashboard');
  }

  return (
    <>
      <PersonStandingIcon size={50} className='text-pink-500' />
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Sign up for a new SupportMe account</CardDescription>
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
                      <Input placeholder='Email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='accountType'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className='w-full'>
                          <SelectValue placeholder='Select account type' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='personal'>Personal</SelectItem>
                          <SelectItem value='company'>Company</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {isCompany && (
                <>
                  <FormField
                    control={form.control}
                    name='companyName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Company name'
                            type='string'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='employees'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employees</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Number of employees'
                            min={0}
                            type='number'
                            {...field}
                            value={field.value ?? ''}
                            onChange={(e) => {
                              field.onChange(parseInt(e.target.value) || 0);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              <FormField
                control={form.control}
                name='dob'
                render={({ field }) => {
                  const dobFromDate = new Date();
                  dobFromDate.setFullYear(dobFromDate.getFullYear() - 120);

                  return (
                    <FormItem className='flex flex-col'>
                      <FormLabel htmlFor='date'>Date of birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={'outline'}
                              id='date'
                              className='w-full justify-between normal-case'
                            >
                              <span>
                                {!!field.value
                                  ? format(field.value, 'PPP')
                                  : 'Pick a date'}
                              </span>
                              <CalendarIcon className='h-4 w-4' />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
                            onSelect={(value) => field.onChange(value || null)}
                            defaultMonth={field.value}
                            fixedWeeks
                            weekStartsOn={1}
                            startMonth={dobFromDate}
                            captionLayout='dropdown'
                            disabled={[
                              {
                                after: new Date(),
                                before: dobFromDate,
                              },
                            ]}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  );
                }}
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
                        onChange={(e) => {
                          field.onChange(e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder='Confirm Password'
                        type='password'
                        {...field}
                        onChange={(e) => {
                          field.onChange(e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='acceptTerms'
                render={({ field }) => (
                  <FormItem className='flex flex-col gap-2 space-y-0'>
                    <div className='flex gap-2'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        Accept terms and conditions
                      </FormLabel>
                    </div>
                    <FormDescription>
                      By creating an account, you agree to our{' '}
                      <Link
                        href='/terms'
                        className='underline underline-offset-4 hover:text-primary'
                      >
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link
                        href='/privacy'
                        className='underline underline-offset-4 hover:text-primary'
                      >
                        Privacy Policy
                      </Link>
                      .
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type='submit'>Sign Up</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className=''>
          <small>Already have an account?</small>
          <Button asChild size={'sm'} variant={'link'}>
            <Link href={'/login'}>Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
