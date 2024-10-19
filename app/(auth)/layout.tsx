import BgAuth from '@/app/assets/images/bg-auth.png';
import Image from 'next/image';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 min-h-screen items-center'>
      <div className='flex justify-center p-4'>{children}</div>
      <Image
        src={BgAuth}
        width={1024}
        height={720}
        alt='bg auth'
        className='hidden lg:inline-block'
      />
    </main>
  );
}
