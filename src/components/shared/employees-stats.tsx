import { cn } from '@/lib/utils';
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserCheckIcon,
  UserIcon,
  UserRoundXIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

import cm from '../../../public/images/cm.jpg';
import WorkLocationTrends from './work-location-trends';

export default function EmployeesStats() {
  const totalEmployees = 100;
  const employeesPresent = 80;
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100;
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
      <Card className='col-span-1 gap-1'>
        <CardHeader>
          <CardTitle className='text-base'>Total employees</CardTitle>
        </CardHeader>
        <CardContent className='flex justify-between items-center flex-wrap gap-4'>
          <div className='flex gap-2'>
            <UserIcon className='text-primary' />
            <span className='text-5xl font-bold'>{totalEmployees}</span>
          </div>
          <Button asChild size={'xs'}>
            <Link href={'/dashboard/employees'}>View all</Link>
          </Button>
        </CardContent>
      </Card>
      <Card className='col-span-1 gap-1'>
        <CardHeader>
          <CardTitle className='text-base'>Employees present</CardTitle>
        </CardHeader>
        <CardContent className=''>
          <div className='flex gap-2'>
            {employeesPresentPercentage >= 75 ? (
              <UserCheckIcon className='text-primary' />
            ) : (
              <UserRoundXIcon className='text-primary' />
            )}
            <span className='text-5xl font-bold'>{employeesPresent}</span>
          </div>
        </CardContent>
        <CardFooter className='mt-2'>
          <span
            className={cn('text-xs text-emerald-500 flex gap-1 items-center', {
              'text-red-500': employeesPresentPercentage < 75,
            })}
          >
            {employeesPresentPercentage >= 75 ? (
              <>
                <BadgeCheckIcon />
                {employeesPresentPercentage.toFixed(0)}% of employees are
                present
              </>
            ) : (
              <>
                <AlertTriangleIcon />
                Only {employeesPresentPercentage.toFixed(0)}% of employees are
                present
              </>
            )}
          </span>
        </CardFooter>
      </Card>
      <Card className='border-primary gap-1'>
        <CardHeader>
          <CardTitle className='text-base'>Employees of the month</CardTitle>
        </CardHeader>
        <CardContent className='flex gap-2 items-center'>
          <Avatar>
            <Image src={cm} alt='cm' />
            <AvatarFallback>CM</AvatarFallback>
          </Avatar>
          <span className='text-2xl'>Colin Murray!</span>
        </CardContent>
        <CardFooter className='flex gap-2 items-center text-xs text-muted-foreground mt-2'>
          <PartyPopperIcon className='text-primary' />
          <span>Best employee of the month</span>
        </CardFooter>
      </Card>

      <Card className='lg:col-span-3'>
        <CardHeader>
          <CardTitle className='text-lg flex items-center gap-2'>
            <LaptopIcon className='text-primary' />
            <span>Employee work location trends</span>
          </CardTitle>
          <CardContent className='pl-0'>
            <WorkLocationTrends />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
