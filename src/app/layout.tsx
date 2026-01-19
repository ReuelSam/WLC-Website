import './globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Fraunces, Source_Sans_3 } from 'next/font/google';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display'
});
const body = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: {
    default: 'Word of Life Church',
    template: '%s | Word of Life Church'
  },
  description: 'A small, welcoming church community rooted in faith, friendship, and care.',
  openGraph: {
    title: 'Word of Life Church',
    description:
      'A small, welcoming church community rooted in faith, friendship, and care.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
