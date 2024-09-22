'use client';
import React from 'react';
import { Stack, Typography, Toolbar, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import BgHEr from '../../../../public/static/icons/Topographic.png';
import LightLogo from '../../../../public/static/logo-light.png';
import DarkLogo from '../../../../public/static/logo-dark.png';
import { useSelector } from 'react-redux';
import { darkMode } from '@/lib/redux';
import LoginForm from '@/components/forms/login';

export default function LoginAuth() {
  const isDarkMode = useSelector(darkMode);

  return (
    <Stack
      direction='column'
      justifyContent='space-between'
      alignItems='center'
      spacing={6}
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
      <LoginForm />
      <Typography
        variant='body2'
        fontSize={{ xs: 10, md: 14 }}
        color='text.secondary'
        textAlign='center'
        pt={{ xs: 8, md: 0 }}>
        Don’t have an account, &nbsp;
        <Typography
          variant='subtitle2'
          fontSize={{ xs: 10, md: 14 }}
          color='text.primary'
          href={`/auth/register`}
          component={Link}
          sx={{
            textDecoration: 'none',
          }}>
          Sign up
        </Typography>
      </Typography>
    </Stack>
  );
}
