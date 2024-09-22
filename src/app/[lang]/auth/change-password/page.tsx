'use client';
import React from 'react';
import { Paper, Grid, Box } from '@mui/material';
import AuthCard from '@/components/cards/authCard';
import ChangePasswordAuth from '@/components/_main/auth/changePassword';

export default function Page() {
  return (
    <Box
      sx={{
        p: 3.2,
        bgcolor: (theme) => theme.palette.background.paper,
      }}>
      <Grid
        container
        spacing={2}>
        <Grid
          item
          xs={12}
          md={4}>
          <AuthCard />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}>
          <ChangePasswordAuth />
        </Grid>
      </Grid>
    </Box>
  );
}
