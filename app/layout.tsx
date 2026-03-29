import type { Metadata } from 'next';
import './globals.css';
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
