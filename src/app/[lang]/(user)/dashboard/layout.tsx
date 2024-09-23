import React from 'react';
// layout
import DashboardLayout from 'src/components/layout/_admin';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
