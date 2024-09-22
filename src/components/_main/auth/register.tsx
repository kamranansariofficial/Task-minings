'use client';
import React from 'react';
import { Stack, Typography, Toolbar, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import LightLogo from '../../../../public/static/logo-light.png';
import DarkLogo from '../../../../public/static/logo-dark.png';
import BgHEr from '../../../../public/static/icons/Topographic.png';

import { useSelector } from 'react-redux';
import { darkMode } from '@/lib/redux';
import RegisterForm from '@/components/forms/register';

export default function RegisterAuth() {
  const isDarkMode = useSelector(darkMode);

  return (
    <Stack
      direction='column'
      justifyContent='space-between'
      alignItems='center'
      spacing={3}
      sx={{
        height: '100%',
      }}>
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          img: {
            height: '250px !important',
            width: '250px !important',
            objectFit: 'contain !important',
            top: '-20px !important',
          },
        }}>
        <Image
          src={BgHEr}
          alt='dd'
          fill
          placeholder='blur'
          objectFit='cover'
        />
      </Box>
      <Toolbar
        sx={{
          py: 2,
        }}>
        <Box
          component={Link}
          href='/'
          sx={{
            position: 'relative',
            height: { xs: 40, md: 74 },
            width: { xs: 150, md: 304 },
          }}>
          <Image
            src={isDarkMode ? DarkLogo : LightLogo}
            alt='logo'
            priority
            fill
            objectFit='contain'
          />
        </Box>
      </Toolbar>
      <RegisterForm />
      <Typography
        pt={{ xs: 4, md: 0 }}
        variant='body2'
        fontSize={{ xs: 10, md: 14 }}
        color='text.secondary'
        textAlign='center'>
        Already have an account? &nbsp;
        <Typography
          variant='subtitle2'
          fontSize={{ xs: 10, md: 14 }}
          color='text.primary'
          href={`/auth/login`}
          component={Link}
          sx={{
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}>
          Log in
        </Typography>
      </Typography>
    </Stack>
  );
}
