import './globals.css';
import { type ReactNode } from 'react';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Ремонт и дизайн',
  description: 'Тестовое задание для PalladiumLab',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body>
        <main>{children}</main>
        {/* <Portfolio />
        <Footer /> */}
      </body>
    </html>
  );
}
