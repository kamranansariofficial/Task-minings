import React from 'react';
// mui
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
// redux
import { darkMode, useSelector } from '@/lib/redux';

// images
import Image from 'next/image';
import LightChart from '@public/static/macbook-light.png';
import DarkChart from '@public/static/macbook-dark.png';

export default function EasyTask() {
  const theme = useTheme();
  const isDarkMode = useSelector(darkMode);

  return (
    <Box
      sx={{
        position: 'relative',
        py: 6,
        overflow: 'hidden',
        '::before': {
          content: "''",
          position: 'absolute',
          top: 0,
          right: { xs: 0, md: '10%' },
          background: 'url(/static/bgCenter.png)',
          height: { xs: 250, md: 450 },
          width: { xs: 250, md: 450 },
          backgroundPosition: ' center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        },
        '::after': {
          content: "''",
          position: 'absolute',
          bottom: 0,
          left: 0,
          background: 'url(/static/bgLeft.png)',
          height: { xs: 250, md: 450 },
          width: { xs: 250, md: 450 },
          backgroundPosition: 'bottom left',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        },
      }}>
      <Container>
        <Typography
          variant='h2'
          color='text.primary'
          textTransform='uppercase'
          textAlign='center'
          mb={{ xs: 2, md: 4 }}
          sx={{
            maxWidth: 810,
            mx: 'auto',
          }}>
          Start with Easy Tasks and Earn{' '}
          <Typography
            component='span'
            variant='h2'
            color='primary'>
            Tether
          </Typography>{' '}
          Instantly
        </Typography>
        <Box
          sx={{
            position: 'relative',
            height: { xs: 260, md: 480 },
            width: '100%',
            zIndex: 2,
          }}>
          <Image
            src={isDarkMode ? DarkChart : LightChart}
            alt='chart image'
            priority
            fill
            objectFit='contain'
          />
        </Box>
      </Container>
      <Toolbar />
    </Box>
  );
}
