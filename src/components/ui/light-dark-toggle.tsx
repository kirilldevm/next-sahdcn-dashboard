'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from './button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function LightDarkToggle({ className }: { className?: string }) {
  const { setTheme, theme, resolvedTheme } = useTheme();
  return (
    <Tooltip>
      <TooltipTrigger
        asChild
        className={className}
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        <Button variant='ghost'>
          <SunIcon size={20} className='hidden dark:inline-block' />
          <MoonIcon size={20} className='dark:hidden inline-block' />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <span className='hidden dark:inline-block'>Enable light mode</span>
        <span className='inline-block dark:hidden'>Enable dark mode</span>
      </TooltipContent>
    </Tooltip>
  );
}
