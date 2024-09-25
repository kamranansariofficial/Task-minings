'use client';
import React from 'react';
// mui
import { Box, Card, Grid, Stack, Typography, useTheme } from '@mui/material';
// components
import ReferFriend from './referFriend';
import ReferralsList from './referralsList';
import Icon from '@/utils/icon';
import Image from 'next/image';
import RewardImageLight from '../../../../public/static/rewar.png';
import RewardImageDark from '../../../../public/static/reward-dark.png';
import SpeakerLight from '../../../../public/static/speaker-light.png';
import SpeakerDark from '../../../../public/static/speaker-dark.png';

export default function ReferralsMain() {
  const theme = useTheme();
  return (
    <Box>
      <Grid
        direction={{ xs: 'column-reverse', md: 'row' }}
        container
        spacing={3}>
        <Grid
          item
          xs={12}
          md={8}>
          <Stack spacing={3}>
            <ReferFriend />
            <ReferralsList />
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}>
          <Stack spacing={3}>
            <Card
              sx={{
                height: { xs: 200, md: 400 },
                position: 'relative',
                p: 2.5,
              }}>
              <Image
                src={
                  theme.palette.mode === 'light'
                    ? RewardImageLight
                    : RewardImageDark
                }
                priority
                alt='reward-img'
                fill
                objectFit='cover'
              />
              <Stack
                spacing={3}
                justifyContent='space-between'
                sx={{
                  height: '100%',
                  zIndex: 2,
                  position: 'relative',
                }}>
                <Typography variant='h5'>Referral Rewards</Typography>
                <Box
                  sx={{
                    maxWidth: { xs: 100, md: 165 },
                    minHeight: { xs: 36, md: 58 },
                    borderRadius: 3,
                    border: '1px solid' + theme.palette.divider,
                    fontSize: { xs: 18, md: 32 },
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1.5,
                    color: 'primary.main',
                    svg: {
                      fontSize: { xs: 18, md: 32 },
                    },
                  }}>
                  <Icon name='usdt' />
                  5.00
                </Box>
              </Stack>
            </Card>
            <Card
              sx={{
                height: { xs: 200, md: 400 },
                position: 'relative',
                p: 2.5,
              }}>
              <Image
                src={
                  theme.palette.mode === 'light' ? SpeakerLight : SpeakerDark
                }
                priority
                alt='reward-img'
                fill
                objectFit='cover'
              />
              <Stack
                spacing={3}
                justifyContent='space-between'
                sx={{
                  height: '100%',
                  zIndex: 2,
                  position: 'relative',
                }}>
                <Typography variant='h5'>List of Referrals</Typography>
                <Box
                  sx={{
                    maxWidth: { xs: 90, md: 115 },
                    minHeight: { xs: 36, md: 58 },
                    borderRadius: 3,
                    border: '1px solid' + theme.palette.divider,
                    fontSize: { xs: 18, md: 32 },
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1.5,
                    color: 'primary.main',
                    svg: {
                      fontSize: { xs: 18, md: 32 },
                    },
                  }}>
                  15
                </Box>
              </Stack>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
