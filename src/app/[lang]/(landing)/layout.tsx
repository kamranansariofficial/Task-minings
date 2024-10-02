import React from 'react';
// component
import AppbarMain from '@/components/layout/_main/topbar';
import Footer from '@/components/layout/_main/footer';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AppbarMain />
      {children}
      <Footer />
    </div>
  );
}
