import type { Metadata } from 'next';
import './globals.css';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'To Be Seen — Digital Presence for Australian Businesses',
    template: '%s | To Be Seen',
  },
  description:
    'In every city, every street, every industry — there are businesses doing exceptional work in relative obscurity. TO BE SEEN exists to close that gap. We build brand presence that converts interest into loyalty.',
  keywords: ['digital presence', 'brand visibility', 'small business Australia', 'website creation', 'marketing automation', 'Brisbane'],
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
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400,300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Suspense fallback={null}><Navbar /></Suspense>
        <main className="flex-1">{children}</main>
        <Suspense fallback={null}><Footer /></Suspense>
      </body>
    </html>
  );
}
