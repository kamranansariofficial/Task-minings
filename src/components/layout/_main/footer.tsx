'use client';
import React from 'react';
// mui
import {
  alpha,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import Icon from '@/utils/icon';
import LocaleSwitcher from '@/components/locale-switcher';
import { darkMode, settingSlice } from '@/lib/redux';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
//

export default function Footer() {
  const isDarkMode = useSelector(darkMode);
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        '::before': {
          content: "''",
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          background: 'url(/static/bgRectangle.png)',
          height: { xs: 144, md: 400 },
          width: { xs: 300, md: 950 },
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        },
      }}>
      <Toolbar />
      <Container>
        <Box sx={{ py: 3 }}>
          <Grid
            container
            spacing={4}>
            <Grid
              item
              xs={12}
              md={3}>
              <Typography
                variant='h6'
                mb={2}>
                Community
              </Typography>
              <Stack spacing={2}>
                <Stack
                  direction='row'
                  alignItems='center'
                  flexWrap='wrap'>
                  {soicalData?.map((item) => (
                    <IconButton
                      key={Math.random()}
                      sx={{
                        mr: 1,
                        color: isDarkMode
                          ? theme.palette.common.white
                          : '#1B1F26',
                      }}>
                      <Icon name={item.name} />
                    </IconButton>
                  ))}
                </Stack>
                <Stack
                  direction='row'
                  alignItems='center'
                  spacing={1}>
                  <IconButton
                    sx={{
                      height: 30,
                      width: 30,
                      borderRadius: { xs: 2 },
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                    }}
                    color='primary'>
                    <Icon name='bitcoin-cpu-1' />
                  </IconButton>
                  <Typography variant='body1'>TSD</Typography>
                </Stack>
                <Stack
                  direction='row'
                  alignItems='center'
                  sx={{
                    pb: 2,
                  }}>
                  <IconButton
                    sx={{
                      height: 30,
                      width: 30,
                      borderRadius: { xs: 2 },
                      bgcolor: isDarkMode ? '#4E4E4E' : '#DCDFE6',
                    }}
                    onClick={() => dispatch(settingSlice.actions.changeMode())}>
                    <Icon name={isDarkMode ? 'wb_sunny' : 'dark_mode'} />
                  </IconButton>
                  <LocaleSwitcher />
                </Stack>
              </Stack>
            </Grid>
            <Grid
              item
              xs={6}
              md={2}>
              <Typography
                variant='h6'
                mb={2}>
                Company
              </Typography>
              <Stack spacing={2}>
                {companyData.map((item) => (
                  <Typography
                    key={Math.random()}
                    component={Link}
                    href='#'
                    variant='body1'
                    color='text.secondary'
                    sx={{
                      transition: 'ease-in-out .3s',
                      ':hover': {
                        color: theme.palette.primary.main,
                      },
                    }}>
                    {item.name}
                  </Typography>
                ))}
              </Stack>
            </Grid>
            <Grid
              item
              xs={6}
              md={2}>
              <Typography
                variant='h6'
                mb={2}>
                Products
              </Typography>
              <Stack spacing={2}>
                {productData.map((item) => (
                  <Typography
                    key={Math.random()}
                    component={Link}
                    href='#'
                    variant='body1'
                    color='text.secondary'
                    sx={{
                      transition: 'ease-in-out .3s',
                      ':hover': {
                        color: theme.palette.primary.main,
                      },
                    }}>
                    {item.name}
                  </Typography>
                ))}
              </Stack>
            </Grid>
            <Grid
              item
              xs={6}
              md={2}>
              <Typography
                variant='h6'
                mb={2}>
                Legal
              </Typography>
              <Stack spacing={2}>
                {legalData.map((item) => (
                  <Typography
                    key={Math.random()}
                    component={Link}
                    href='#'
                    variant='body1'
                    color='text.secondary'
                    sx={{
                      transition: 'ease-in-out .3s',
                      ':hover': {
                        color: theme.palette.primary.main,
                      },
                    }}>
                    {item.name}
                  </Typography>
                ))}
              </Stack>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}>
              <Typography
                variant='h6'
                mb={2}>
                Download
              </Typography>
              <Stack spacing={2}>
                {downloadData.map((item) => (
                  <Typography
                    key={Math.random()}
                    component={Link}
                    href='#'
                    variant='body1'
                    color='text.secondary'
                    sx={{
                      transition: 'ease-in-out .3s',
                      ':hover': {
                        color: theme.palette.primary.main,
                      },
                    }}>
                    {item.name}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Divider />
      <Typography
        variant='body2'
        color='text.secondary'
        textAlign='center'
        sx={{ py: 3 }}>
        Copyright © 2024 Task Minings. All rights reserved
      </Typography>
    </Box>
  );
}

const soicalData = [
  {
    name: 'discord',
    path: '#',
  },
  {
    name: 'telegram-1',
    path: '#',
  },
  {
    name: 'tiktok',
    path: '#',
  },
  {
    name: 'facebook-02',
    path: '#',
  },
  {
    name: 'new-twitter',
    path: '#',
  },
  {
    name: 'instagram',
    path: '#',
  },
  {
    name: 'youtube',
    path: '#',
  },
];

const companyData = [
  {
    name: 'Home',
    path: '#',
  },
  {
    name: 'Buy Crypto',
    path: '#',
  },
  {
    name: 'Market',
    path: '#',
  },
  {
    name: 'Discover',
    path: '#',
  },
];
const productData = [
  {
    name: 'Exchange',
    path: '#',
  },
  {
    name: 'Buy ',
    path: '#',
  },
  {
    name: 'Gift Card',
    path: '#',
  },
];
const legalData = [
  {
    name: 'Privacy Policy',
    path: '#',
  },
  {
    name: 'Terms & Condition ',
    path: '#',
  },
  {
    name: 'Payment Policy',
    path: '#',
  },
  {
    name: 'Crytpto Policy',
    path: '#',
  },
  {
    name: 'Refund Policy',
    path: '#',
  },
];
const downloadData = [
  {
    name: 'Windows',
    path: '#',
  },
  {
    name: 'Mac',
    path: '#',
  },
  {
    name: 'Linux',
    path: '#',
  },
  {
    name: 'Android ',
    path: '#',
  },
  {
    name: 'IOS',
    path: '#',
  },
];
