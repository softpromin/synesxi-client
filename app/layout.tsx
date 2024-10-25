'use client';

import './globals.css';

import { usePathname } from 'next/navigation';

import SideBar from '@/components/sidebar';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const getContent = () => {
    let modals = ['/login', '/register'];
    if (modals.includes(pathname)) {
      return (
        <div className='w-full h-screen flex items-center justify-center bg-gradient-to-bl from-[#242051] to-[#11151c]'>
          {children}
        </div>
      );
    } else {
      return (
        <div className='w-full p-6 flex flex-col'>
          <TopBar />
          <div className='mt-9 mb-12'>
            {children}
          </div>
          <Footer />
        </div>
      );
    }
  };

  return (
    <html lang='en'>
      <head>
        <title>Synesxi</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className='max-w-[1440px] mx-auto bg-custom-background flex'>
          <SideBar />
          {getContent()}
        </div>
      </body>
    </html>
  );
}
