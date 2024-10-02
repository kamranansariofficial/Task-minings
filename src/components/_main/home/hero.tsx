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
import LightChart from '@public/static/chart.png';
import DarkChart from '@public/static/chart-dark.png';

export default function Hero() {
  const theme = useTheme();
  const isDarkMode = useSelector(darkMode);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        '::before': {
          content: "''",
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundImage: 'url(/static/bgAfter.png)', // Corrected path
          height: { xs: 250, md: 450 },
          width: { xs: 250, md: 450 },
          backgroundPosition: 'top center',
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
      <Toolbar />
      <Toolbar />
      <Container>
        <Card
          sx={{
            position: 'relative',
            zIndex: 2,
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            bgcolor: theme.palette.background.default,
          }}>
          <Grid
            container
            alignItems='center'
            spacing={{ xs: 2, md: 4 }}>
            <Grid
              item
              xs={12}
              md={6}>
              <Typography
                variant='h2'
                color='text.primary'
                textTransform='uppercase'
                textAlign={{ xs: 'center', md: 'left' }}
                mb={{ xs: 0, md: 2 }}>
                Earn Rewards for Completing{' '}
                <Typography
                  component='span'
                  variant='h2'
                  color='primary'>
                  Simple Tasks
                </Typography>
              </Typography>
              <Typography
                variant='body1'
                lineHeight={{ xs: 1.5, md: 2 }}
                fontSize={{ xs: 14, md: 20 }}
                textAlign={{ xs: 'center', md: 'left' }}
                mb={{ xs: 1.5, md: 2.5 }}
                color='text.secondary'>
                Join Task Minings today and start <br />
                earning with Ease!
              </Typography>
              <Stack
                direction='row'
                alignItems='center'
                spacing={2}
                mb={1}>
                <TextField
                  placeholder='Enter your email/phone'
                  fullWidth
                  sx={{
                    '.MuiInputBase-root': {
                      height: { xs: 36, md: 48 },
                    },
                  }}
                />
                <Button
                  size={isMobile ? 'small' : 'large'}
                  variant='contained'
                  color='primary'
                  sx={{
                    minWidth: 100,
                  }}>
                  Sign Up
                </Button>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 160, md: 280 },
                  width: '100%',
                }}>
                <Image
                  src={isDarkMode ? DarkChart : LightChart}
                  alt='chart image'
                  priority
                  fill
                  objectFit='contain'
                />
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
      <Toolbar />
    </Box>
  );
}
