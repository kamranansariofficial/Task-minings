'use client';
import * as React from 'react';
import ThemeRegistry from '@/ThemeRegistry/ThemeRegistry';
import { Providers } from '@/lib/providers';
import { i18n } from 'i18n-config';
import Topbar from '@/components/layout/_main/topbar';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import { Toaster } from 'react-hot-toast';
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

// export const metadata = {
//   title: "Next.js App Router + Material UI v5",
//   description: "Next.js App Router + Material UI v5",
// };

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  const pathname = usePathname();

  const isDashboard = pathname.includes('/dashboard');
  const isAuth = pathname.includes('/auth');

  return (
    <html lang={params.lang}>
      <body>
        <Providers>
          <ThemeRegistry lang={params.lang}>
            <Toaster />
            {/* {!isDashboard ||
              (!isAuth && (
                <>
                  <Topbar />
                  <Box height={80} />
                </>
              ))} */}
            {children}
          </ThemeRegistry>
        </Providers>
      </body>
    </html>
  );
}
