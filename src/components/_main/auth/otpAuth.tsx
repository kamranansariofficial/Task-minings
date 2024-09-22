'use client';
import React from 'react';
import { Stack, Typography, Toolbar, Box, IconButton } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import LightLogo from '../../../../public/static/logo-light.png';
import DarkLogo from '../../../../public/static/logo-dark.png';
import BgHEr from '../../../../public/static/icons/Topographic.png';

import { useSelector } from 'react-redux';
import { darkMode } from '@/lib/redux';
import ForgetPasswordForm from '@/components/forms/forgetPassword';
import OTPForm from '@/components/forms/otp';
import { useRouter } from 'next-nprogress-bar';
import { IoIosArrowRoundBack } from 'react-icons/io';

export default function OTPAuth() {
  const router = useRouter();
  const isDarkMode = useSelector(darkMode);

  return (
    <Box
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
      <Stack
        direction='column'
        justifyContent='space-between'
        alignItems='center'
        spacing={3}
        sx={{
          height: { xs: 'calc(100vh - 70px)', md: '100%' },
        }}>
        <Toolbar
          sx={{
            py: 2,
            width: '100%',
            justifyContent: 'center',
          }}>
          <IconButton
            size='small'
            color='inherit'
            sx={{
              display: { xs: 'flex', md: 'none' },
              position: 'absolute',
              top: '50%',
              left: -15,
              transform: 'translateY(-50%)',
            }}
            onClick={() => router.push('/auth/login')}>
            <IoIosArrowRoundBack size={24} />
          </IconButton>
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
        <OTPForm />
        <Typography
          variant='body2'
          fontSize={{ xs: 10, md: 14 }}
          color='text.secondary'
          textAlign='center'>
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
    </Box>
  );
}
