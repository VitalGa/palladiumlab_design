import './globals.css';
import { type ReactNode } from 'react';

export const metadata = {
  title: 'Мой проект',
  description: 'Описание моего проекта',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body>{children}</body>
    </html>
  );
}
