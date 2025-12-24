'use client';

import { supportTicketsData } from '@/lib/support-tickets-data';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function SupportTicketsResolved() {
  return (
    <ResponsiveContainer height={350} width='100%'>
      <LineChart
        data={supportTicketsData}
        className='[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800'
      >
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='name' stroke='#888' fontSize={12} />
        <YAxis stroke='#888' fontSize={12} />
        <Tooltip
          wrapperClassName='dark:!bg-black rounded-md border-border-foreground !text-sm'
          labelClassName='font-bold'
        />
        <Line
          type='monotone'
          dataKey='delta'
          stroke='#ec4899'
          strokeWidth={2}
          dot={false}
        />
        <Line
          type='monotone'
          dataKey='alpha'
          stroke='#3b82f6'
          strokeWidth={2}
          dot={false}
        />
        <Line
          type='monotone'
          dataKey='canary'
          stroke='#3b8'
          strokeWidth={2}
          dot={false}
        />
        <Legend
          formatter={(value) => {
            return <span className='capitalize'>{value}</span>;
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
