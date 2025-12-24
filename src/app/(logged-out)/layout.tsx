import LightDarkToggle from '@/components/ui/light-dark-toggle';

export default function LoggedOutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className=' gap-4 p-24 min-h-screen flex flex-col items-center justify-center'>
        {children}
      </div>
      <LightDarkToggle className='fixed right-0 top-1/2 transform -translate-y-1/2' />
    </>
  );
}
