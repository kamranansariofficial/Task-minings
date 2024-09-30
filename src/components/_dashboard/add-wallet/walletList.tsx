'use client';
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
  IconButton,
  Divider,
  useMediaQuery,
} from '@mui/material';
// icons
import { FaEthereum } from 'react-icons/fa';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import Icon from '@/utils/icon';

export default function WalletList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Card
      sx={{
        position: 'relative',
        overflow: 'hidden',
      }}>
      <CardContent>
        <Typography
          variant='h5'
          mb={2}>
          Wallet list
        </Typography>
        <Box
          sx={{
            position: 'relative',
            borderRadius: 2,
            border: '1px solid ' + theme.palette.divider,
            p: 1,
            mb: 2,
            width: '100%',
          }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'start', md: 'center' }}
            justifyContent='space-between'
            spacing={1}
            width='100%'>
            <Stack
              direction='row'
              alignItems='center'
              width='100%'
              spacing={2}>
              <Box
                sx={{
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: { xs: 48, md: 80 },
                  width: { xs: 48, md: 80 },
                  minWidth: { xs: 48, md: 80 },
                  color: theme.palette.common.white,
                  bgcolor: 'common.black',
                }}>
                <FaEthereum size={isMobile ? 24 : 36} />
              </Box>
              <Stack
                spacing={1}
                width='100%'>
                <Typography
                  variant='h6'
                  component='h6'>
                  fgfhdhfjshdkdkl[w884 s[d kish hsg
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'>
                  Ethereum
                </Typography>
              </Stack>
            </Stack>
            {isMobile && (
              <Divider
                sx={{
                  width: '100%',
                }}
              />
            )}
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='end'
              spacing={1}
              sx={{
                width: '100%',
              }}>
              <IconButton color='inherit'>
                <MdOutlineModeEditOutline />
              </IconButton>
              <IconButton color='error'>
                <Icon name='delete' />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            position: 'relative',
            borderRadius: 2,
            border: '1px solid ' + theme.palette.divider,
            p: 1,
          }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'start', md: 'center' }}
            justifyContent='space-between'
            spacing={1}>
            <Stack
              direction='row'
              alignItems='center'
              spacing={2}>
              <Box
                sx={{
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: { xs: 48, md: 80 },
                  width: { xs: 48, md: 80 },
                  minWidth: { xs: 48, md: 80 },
                  color: theme.palette.common.white,
                  bgcolor: '#FC9F2A',
                }}>
                <BsCurrencyBitcoin size={isMobile ? 24 : 36} />
              </Box>
              <Stack spacing={1}>
                <Typography variant='h6'>
                  fgfhdhfjshdkdkl[w884 s[dk ish hsg
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'>
                  Ethereum
                </Typography>
              </Stack>
            </Stack>
            {isMobile && (
              <Divider
                sx={{
                  width: '100%',
                }}
              />
            )}
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='end'
              spacing={1}
              sx={{
                width: '100%',
              }}>
              <IconButton color='inherit'>
                <MdOutlineModeEditOutline />
              </IconButton>
              <IconButton color='error'>
                <Icon name='delete' />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
