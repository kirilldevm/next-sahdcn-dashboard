import { cn } from '@/lib/utils';
import { PersonStandingIcon } from 'lucide-react';

export default function MenuTitle({ className }: { className?: string }) {
  return (
    <header className={cn('flex gap-2 items-center', className)}>
      <PersonStandingIcon size={40} className='text-primary' />
      <h4>SupportMe</h4>
    </header>
  );
}
