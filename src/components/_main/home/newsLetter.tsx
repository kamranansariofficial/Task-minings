'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { darkMode } from '@/lib/redux';
import { useSelector } from 'react-redux';

export default function NewsLetter() {
  const isDarkMode = useSelector(darkMode);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 2, md: 6 },
        overflow: 'hidden',
        '::before': {
          content: "''",
          position: 'absolute',
          bottom: 0,
          right: 0,
          background: 'url(/static/bgRight.png)',
          height: { xs: 250, md: 450 },
          width: { xs: 250, md: 450 },
          backgroundPosition: 'right bottom',
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
        <Card
          sx={{
            position: 'relative',
            zIndex: 3,
          }}>
          <CardContent sx={{ py: { xs: 2, md: '64px !important' } }}>
            <Container
              maxWidth='sm'
              sx={{
                px: 0,
              }}>
              <Typography
                variant='h3'
                color='text.primary'
                textTransform='uppercase'
                textAlign={'center'}
                mb={{ xs: 0, md: 2 }}>
                Sign up for updates
              </Typography>
              <Typography
                variant='body1'
                lineHeight={{ xs: 1.5, md: 2 }}
                fontSize={{ xs: 14, md: 20 }}
                textAlign={'center'}
                mb={{ xs: 1.5, md: 2.5 }}
                color='text.secondary'>
                Subscribe to get update and notify our
                <br />
                exchange and product
              </Typography>
              <Stack
                direction='row'
                alignItems='center'
                spacing={2}
                mb={1}>
                <TextField
                  placeholder='Enter your email'
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
            </Container>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
