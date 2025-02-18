'use client';

import './globals.css';

import { usePathname } from 'next/navigation';

import SideBar from '@/components/sidebar';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const getContent = () => {
    const modals = ['/login', '/register'];
    if (modals.includes(pathname)) {
      return (
        <div className='w-full h-screen flex items-center justify-center bg-gradient-to-bl from-[#242051] to-[#11151c]'>
          <SideBar />
          {children}
        </div>
      );
    } else {
      return (
        <>
          <div className='max-w-52 w-full h-screen'>
            <SideBar />
          </div>
          <div className='w-full p-6 flex flex-col space-y-12'>
            <div>
              {children}
            </div>
            <Footer />
          </div>
        </>
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
          {getContent()}
        </div>
      </body>
    </html>
  );
}
