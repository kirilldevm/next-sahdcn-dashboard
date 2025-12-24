'use client';

import { dataDistribution } from '@/lib/data-pie';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

export default function TeamDistributionChart() {
  return (
    <ResponsiveContainer height={150} width='100%'>
      <PieChart>
        <Pie data={dataDistribution} dataKey={'value'} nameKey={'name'}>
          {dataDistribution.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
          <Tooltip
            wrapperClassName='dark:!bg-black rounded-md border-border-foreground !text-sm dark:[&_.recharts-tooltip-item]:!text-white'
            labelClassName='font-bold'
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
