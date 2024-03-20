import { Metadata } from 'next';
import NavBar from './NavBar';

export const metadata: Metadata = {
  title: 'AYCS',
  description: 'All You Can SOL',
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='flex flex-col h-screen max-h-screen'>
      <NavBar />
      <div className='flex-grow overflow-y-auto bg-customPage text-customText'>
        {children}
      </div>
    </div>
  );
}
