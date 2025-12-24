'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  teamName: string;
  isTeamLeader: boolean;
  avatar?: string;
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'avatar',
    header: '',
    cell: ({ row }) => {
      const avatar = row.getValue('avatar') as string;
      const firstName = row.getValue('firstName') as string;
      const lastName = row.getValue('lastName') as string;
      return (
        <Avatar>
          {avatar && (
            <Image
              src={avatar}
              width={40}
              height={40}
              alt={`${firstName} ${lastName}`}
            />
          )}
          <AvatarFallback className='bg-pink-300 dark:bg-pink-800 rounded-full'>
            {firstName.charAt(0) + lastName.charAt(0)}
          </AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: 'firstName',
    header: 'First name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last name',
  },
  {
    accessorKey: 'teamName',
    header: 'Team',
  },
  {
    accessorKey: 'isTeamLeader',
    header: '',
    cell: ({ row }) => {
      const isTeamLeader = row.getValue('isTeamLeader') as boolean;
      return isTeamLeader ? (
        <Badge variant={'success'}>Team leader</Badge>
      ) : null;
    },
  },
];
