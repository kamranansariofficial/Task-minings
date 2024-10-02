'use client';
import * as React from 'react';
import { Locale } from 'i18n-config';
// mui
import { Box } from '@mui/material';
// components
import Hero from '@/components/_main/home/hero';
import EasyTask from '@/components/_main/home/easyTask';
import EarnRewards from '@/components/_main/home/earnRewards';
import MainFaqs from '@/components/_main/home/faqs';
import NewsLetter from '@/components/_main/home/newsLetter';

export default function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <Box
      sx={{
        position: 'relative',
      }}>
      <Hero />
      <EasyTask />
      <EarnRewards />
      <MainFaqs />
      <NewsLetter />
    </Box>
  );
}
