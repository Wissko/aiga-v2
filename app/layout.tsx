import type { Metadata } from 'next';
import './globals.css';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'AIGA — AI Growth Agency for Australian Businesses',
    template: '%s | AIGA',
  },
  description:
    'AIGA helps Australian small businesses grow with AI-powered automation: websites, phone bots, booking systems, and CRM. Accessible and affordable.',
  keywords: ['AI agency', 'small business automation', 'Australia', 'website creation', 'phone bot', 'booking automation'],
  authors: [{ name: 'AIGA' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'AIGA',
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
      </head>
      <body className="min-h-screen flex flex-col">
        <Suspense fallback={null}><Navbar /></Suspense>
        <main className="flex-1">{children}</main>
        <Suspense fallback={null}><Footer /></Suspense>
      </body>
    </html>
  );
}
