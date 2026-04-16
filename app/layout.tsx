import type { Metadata } from 'next';
import './globals.css';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';
import LanguageGate from '@/components/LanguageGate';

export const metadata: Metadata = {
  title: {
    default: 'TO BE SEEN | Premium Business Systems',
    template: '%s | To Be Seen',
  },
  description:
    'TO BE SEEN builds premium business systems: websites, wallet loyalty, bookings, follow-up, and digital structure designed to convert cleanly.',
  keywords: ['TO BE SEEN', 'premium business systems', 'website creation', 'wallet loyalty', 'bookings', 'follow-up'],
  authors: [{ name: 'To Be Seen' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'To Be Seen',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400,300&f[]=teko@700,600,500,400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <LanguageGate />
          <Suspense fallback={null}><Navbar /></Suspense>
          <main className="flex-1">{children}</main>
          <Suspense fallback={null}><Footer /></Suspense>
        </LanguageProvider>
      </body>
    </html>
  );
}
