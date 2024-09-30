'use client';
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  alpha,
  useTheme,
} from '@mui/material';
// icons
import { SiBinance } from 'react-icons/si';
import { FaEthereum } from 'react-icons/fa';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { IoAdd } from 'react-icons/io5';
import WalletForm from '@/components/forms/walletForm';
import WalletList from './walletList';

export default function AddWallet() {
  const theme = useTheme();
  return (
    <Box>
      <Card
        sx={{
          mb: 3,
        }}>
        <CardContent>
          <Typography
            variant='h5'
            mb={2}>
            Select wallet
          </Typography>
          <Grid
            container
            spacing={2}>
            <Grid
              item
              xs={6}
              md={3}>
              <Button
                size='large'
                fullWidth
                variant='outlined'
                color='primary'
                startIcon={<SiBinance />}>
                Binance
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}>
              <Button
                size='large'
                fullWidth
                variant='outlined'
                color='inherit'
                startIcon={<FaEthereum />}>
                Ethereum
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}>
              <Button
                size='large'
                fullWidth
                variant='outlined'
                color='inherit'
                startIcon={<BsCurrencyBitcoin />}>
                BSV
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}>
              <Button
                size='large'
                fullWidth
                variant='text'
                color='primary'
                sx={{
                  bgcolor: alpha(theme.palette.primary.main, 0.2),
                }}
                startIcon={<IoAdd />}>
                other
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <WalletForm />
      <WalletList />
    </Box>
  );
}
