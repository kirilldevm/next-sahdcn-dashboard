'use client';

import { data } from '@/lib/data';
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function WorkLocationTrends() {
  return (
    <ResponsiveContainer height={350} width='100%'>
      <BarChart
        data={data}
        className='[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800'
      >
        <XAxis dataKey='name' stroke='#888' fontSize={12} />
        <YAxis stroke='#888' fontSize={12} />
        <Tooltip
          separator=': '
          formatter={(value, name) => {
            if (name === 'wfh') return [value, 'Work from home'];
            else if (name === 'office') return [value, 'Work from office'];
            else return [value, name];
          }}
          wrapperClassName='dark:!bg-black rounded-md border-border-foreground !text-sm'
          labelClassName='font-bold'
        />
        <Bar dataKey='office' fill='#ec4899' stackId={1} />
        <Bar dataKey='wfh' fill='#6b7280' stackId={1} radius={[4, 4, 0, 0]} />
        <Legend
          iconType='circle'
          formatter={(value) => {
            if (value === 'wfh')
              return <div className='text-sm'>Work from home</div>;
            else if (value === 'office')
              return <div className='text-sm'>Work from office</div>;
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
