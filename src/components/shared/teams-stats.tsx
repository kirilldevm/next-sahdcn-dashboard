import { teamLeaders } from '@/lib/teamLeaders';
import { LaptopIcon, PieChartIcon, StarIcon, UsersIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import SupportTicketsResolved from './support-tickets-resolved';
import TeamDistributionChart from './team-distribution-chart';

export default function TeamsStats() {
  const totalTeams = 8;
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
      <Card className='col-span-1 gap-1'>
        <CardHeader>
          <CardTitle className='text-base'>Total teams</CardTitle>
        </CardHeader>
        <CardContent className='flex justify-between items-center flex-wrap gap-4'>
          <div className='flex gap-2'>
            <UsersIcon className='text-primary' />
            <span className='text-5xl font-bold'>{totalTeams}</span>
          </div>
          <Button asChild size={'xs'}>
            <Link href={'/dashboard/teams'}>View all</Link>
          </Button>
        </CardContent>
      </Card>
      <Card className='col-span-1 gap-1'>
        <CardHeader>
          <CardTitle className='text-base flex justify-between'>
            <span>Team leaders</span>
            <StarIcon className='text-yellow-500' />
          </CardTitle>
        </CardHeader>
        <CardContent className='flex flex-wrap gap-2 '>
          {teamLeaders.map((teamLeader) => (
            <TooltipProvider key={teamLeader.firstName + teamLeader.lastName}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar>
                    {teamLeader.avatar && (
                      <Image
                        src={teamLeader.avatar}
                        alt={teamLeader.firstName}
                      />
                    )}
                    <AvatarFallback className='bg-pink-300 dark:bg-pink-800 rounded-full'>
                      {teamLeader.firstName.charAt(0)}
                      {teamLeader.lastName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  {teamLeader.firstName} {teamLeader.lastName}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </CardContent>
      </Card>
      <Card className='border-primary gap-1'>
        <CardHeader>
          <CardTitle className='text-base flex justify-between'>
            <span>Team distribution</span>
            <PieChartIcon />
          </CardTitle>
        </CardHeader>
        <CardContent className='pb-0'>
          <TeamDistributionChart />
        </CardContent>
      </Card>

      <Card className='lg:col-span-3'>
        <CardHeader>
          <CardTitle className='text-lg flex items-center gap-2'>
            <LaptopIcon className='text-primary' />
            <span>Support tickets resolved</span>
          </CardTitle>
          <CardContent className='pl-0'>
            <SupportTicketsResolved />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
