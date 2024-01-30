import type { Metadata } from 'next';
import Providers from './providers';
import { Manrope } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';

const font = Manrope({
  subsets: ['latin'],
  weight: ['200', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Audio e-commerce',
  description: 'Frontend mentor challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`bg-light-grey ${font.className}`}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
