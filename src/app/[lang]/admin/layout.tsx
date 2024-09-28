import React from 'react';
// layout
import DashboardLayout from '@/components/layout/_admin';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
