'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useContext } from 'react';
import { Button } from '../ui/button';
import { DrawerContext } from '../ui/drawer';

export default function MenuItem({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  const { onClose } = useContext(DrawerContext);

  const isActive = pathname === href;

  return (
    <li className='w-full'>
      <Button
        variant={isActive ? 'default' : 'ghost'}
        className='normal-case justify-start w-full'
        asChild
        onClick={onClose}
      >
        <Link href={href}>{children}</Link>
      </Button>
    </li>
  );
}
