'use client';
import React from 'react';
import { Stack, Typography, Toolbar, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import LightLogo from '../../../../public/static/logo-light.png';
import DarkLogo from '../../../../public/static/logo-dark.png';
import { useSelector } from 'react-redux';
import { darkMode } from '@/lib/redux';
import ForgetPasswordForm from '@/components/forms/forgetPassword';

export default function ForgetPasswordAuth() {
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
      <Toolbar
        sx={{
          py: 2,
        }}>
        <Box
          component={Link}
          href='/'
          sx={{
            position: 'relative',
            height: 74,
            width: 304,
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
      <ForgetPasswordForm />
      <Typography
        variant='body2'
        color='text.secondary'
        textAlign='center'>
        Don’t have an account, &nbsp;
        <Typography
          variant='subtitle2'
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
