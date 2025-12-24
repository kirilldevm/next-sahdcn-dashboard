'use client';

import MenuTitle from '@/components/shared/menu-title';
import Sidebar from '@/components/shared/sidebar';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { MenuIcon } from 'lucide-react';
import { ReactNode, useState } from 'react';

export default function DashboardLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className='md:grid md:grid-cols-[205px_1fr] h-screen'>
      <Sidebar className='hidden md:flex' />

      {!isDesktop && (
        <div className='sticky top-0 left-0 bg-background md:hidden flex justify-between items-center py-2 px-4 border-b'>
          <MenuTitle />
          <Drawer
            direction='right'
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenChange={setMobileMenuOpen}
          >
            <DrawerTrigger className='cursor-pointer'>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <DialogTitle className='hidden'>Menu</DialogTitle>
              <DialogDescription className='hidden'>Menu</DialogDescription>
              <Sidebar />
            </DrawerContent>
          </Drawer>
        </div>
      )}

      <div className='overflow-auto py-2 px-4'>
        <h1 className='mb-4'>Welcome back, User!</h1>
        {children}
      </div>
    </div>
  );
}
