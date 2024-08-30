import { Inter } from 'next/font/google';
import { cn } from '@/utils/cn';
import './globals.css';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Job Ninja, Jumpstart your career',
  description: 'Finding jobs made easy.',
};

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('antialiased', fontHeading.variable, fontBody.variable)}>
        {children}
      </body>
    </html>
  );
}
