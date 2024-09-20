'use client';
import React from 'react';
import { Paper, Grid } from '@mui/material';
import AuthCard from '@/components/cards/authCard';
import LoginAuth from '@/components/_main/auth/loginAuth';

export default function Page() {
  return (
    <Paper
      sx={{
        p: 3.2,
        borderRadius: 0,
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
          <LoginAuth />
        </Grid>
      </Grid>
    </Paper>
  );
}
