import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import SideBar from '@/components/sidebar';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Synesxi',
  description: 'Synesxi Client',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='max-w-[1440px] mx-auto bg-background-gradient flex'>
          <SideBar />
          <div className='w-full pl-[24px] pt-[22px] pr-[35px] flex flex-col'>
            <TopBar />
            <div className='mt-[35px] mb-[50px]'>
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
