import type { ReactNode } from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gentle-radial">
      <Header />
      <main className="pb-20 pt-6">{children}</main>
      <Footer />
    </div>
  );
}
