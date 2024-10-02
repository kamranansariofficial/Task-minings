'use client';
import * as React from 'react';
import ThemeRegistry from '@/ThemeRegistry/ThemeRegistry';
import { Providers } from '@/lib/providers';
import { Toaster } from 'react-hot-toast';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocaleFnsProvider } from '@/lib/localization';


export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={params.lang}>
      <body>
        <Providers>
          <ThemeRegistry lang={params.lang}>
            <Toaster />
            <LocalizationProvider
              adapterLocale={LocaleFnsProvider(params.lang)}
              dateAdapter={AdapterDateFns}>
              {children}
            </LocalizationProvider>
          </ThemeRegistry>
        </Providers>
      </body>
    </html>
  );
}
