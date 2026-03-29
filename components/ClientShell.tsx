'use client';

import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </>
  );
}
