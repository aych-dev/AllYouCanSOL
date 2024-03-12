import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import './globals.css';
import { Wallet } from './utils/Wallet';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AYCS',
  description: 'All You Can SOL',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col h-screen max-h-screen'>
          <Wallet>
            <NavBar />
            <div className='flex-grow overflow-y-auto bg-customPage text-customText'>
              {children}
            </div>
          </Wallet>
        </div>
      </body>
    </html>
  );
}
