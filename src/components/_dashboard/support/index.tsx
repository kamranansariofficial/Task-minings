'use client';
import React from 'react';
//mui
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  IconButton,
  alpha,
  useTheme,
} from '@mui/material';
// icons
import { IoIosArrowForward } from 'react-icons/io';
import { MdOutlineSupport } from 'react-icons/md';
import { MdContactSupport } from 'react-icons/md';
import { MdReport } from 'react-icons/md';
import { MdPolicy } from 'react-icons/md';
import { MdVerifiedUser } from 'react-icons/md';
import { MdDevices } from 'react-icons/md';
import { useRouter } from 'next-nprogress-bar';

const data = [
  {
    name: 'General',
    items: [
      {
        title: 'Safety center',
        detail: 'Enjoyed this post? Give it a like and show your support!',
        icon: <MdOutlineSupport size={24} />,
      },
      {
        title: 'Help center',
        detail: 'Enjoyed this post? Give it a like and show your support!',
        icon: <MdContactSupport size={24} />,
      },
      {
        title: 'Report a problem',
        detail: 'Enjoyed this post? Give it a like and show your support!',
        icon: <MdReport size={24} />,
      },
    ],
  },
  {
    name: 'Transaction support',
    items: [
      {
        title: 'Terms & policy',
        detail: 'Enjoyed this post? Give it a like and show your support!',
        icon: <MdPolicy size={24} />,
      },
      {
        title: 'Privacy center',
        detail: 'Enjoyed this post? Give it a like and show your support!',
        icon: <MdVerifiedUser size={24} />,
      },
      {
        title: 'Device request',
        detail: 'Enjoyed this post? Give it a like and show your support!',
        icon: <MdDevices size={24} />,
      },
    ],
  },
];

export default function SupportComponent() {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box>
      {data.map((item) => (
        <Stack
          key={Math.random()}
          spacing={3}
          mb={3}>
          <Typography
            variant='h5'
            color='text.primary'>
            {item.name}
          </Typography>
          <Stack spacing={2}>
            {item.items.map((v) => (
              <Card>
                <CardContent
                  sx={{
                    p: { xs: 2, md: 3 },
                  }}>
                  <Stack
                    spacing={1}
                    direction='row'
                    alignItems={{ xs: 'start', md: 'center' }}
                    justifyContent='space-between'>
                    <Stack
                      direction='row'
                      alignItems={{ xs: 'start', md: 'center' }}
                      spacing={2}>
                      <Box
                        sx={{
                          height: { xs: 48, md: 64 },
                          width: { xs: 48, md: 64 },
                          minWidth: 48,
                          borderRadius: '50%',
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        {v.icon}
                      </Box>
                      <Stack spacing={0.5}>
                        <Typography
                          variant='h6'
                          fontWeight={600}>
                          {v.title}
                        </Typography>
                        <Typography
                          variant='body2'
                          color='text.secondary'>
                          {v.detail}
                        </Typography>
                      </Stack>
                    </Stack>
                    <IconButton
                      size='small'
                      color='inherit'
                      onClick={() => router.push('/dashboard/support/details')}>
                      <IoIosArrowForward />
                    </IconButton>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Stack>
      ))}
    </Box>
  );
}
