import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Avatar, AvatarFallback } from '../ui/avatar';
import LightDarkToggle from '../ui/light-dark-toggle';
import MenuTitle from './menu-title';
import NavigationMenu from './navigation-menu';

export default function Sidebar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        'md:bg-muted overflow-auto p-4 flex-col flex h-full',
        className
      )}
    >
      <MenuTitle className='border-b pb-4' />

      <div className='py-4 grow'>
        <NavigationMenu />
      </div>

      <footer className='flex gap-2 items-center'>
        <Avatar>
          <AvatarFallback className='bg-pink-300 dark:bg-pink-800 rounded-full'>
            TP
          </AvatarFallback>
        </Avatar>
        <Link href={'/'} className='hover:underline'>
          Logout
        </Link>
        <LightDarkToggle className='ml-auto' />
      </footer>
    </nav>
  );
}
