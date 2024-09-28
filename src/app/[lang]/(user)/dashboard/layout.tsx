import React from 'react';
// layout
import UserDashboardLayout from '@/components/layout/_dashboard';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserDashboardLayout>{children}</UserDashboardLayout>;
}
