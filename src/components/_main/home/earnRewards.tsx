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
  alpha,
} from '@mui/material';
// redux
import { darkMode, useSelector } from '@/lib/redux';

// images
import Image from 'next/image';
import LightMobile from '@public/static/mobile-light.png';
import DarkMobile from '@public/static/mobile-dark.png';
import Icon from '@/utils/icon';

export default function EarnRewards() {
  const theme = useTheme();
  const isDarkMode = useSelector(darkMode);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        position: 'relative',
        py: 6,
        overflow: 'hidden',
        '::before': {
          content: "''",
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          right: 0,
          background: 'url(/static/bgCenter.png)',
          height: { xs: 250, md: 450 },
          width: { xs: 250, md: 450 },
          backgroundPosition: 'center',
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
      <Box
        sx={{
          position: 'relative',
          '::before': {
            content: "''",
            position: 'absolute',
            top: -20,
            right: 0,
            background: 'url(/static/bgRight.png)',
            height: { xs: 250, md: 450 },
            width: { xs: 250, md: 450 },
            backgroundPosition: 'right center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          },
          '::after': {
            content: "''",
            position: 'absolute',
            bottom: '-10%',
            left: '40%',
            transform: 'translateX(-50%)',
            background: 'url(/static/bgCenter.png)',
            height: { xs: 250, md: 450 },
            width: { xs: 250, md: 450 },
            backgroundPosition: 'bottom center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          },
        }}>
        <Container>
          <Box
            sx={{
              position: 'relative',
              zIndex: 4,
            }}>
            <Grid
              container
              spacing={{ xs: 2, md: 6 }}>
              <Grid
                item
                xs={12}
                md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 480, md: 700 },
                    width: '100%',
                    zIndex: 2,
                  }}>
                  <Image
                    src={isDarkMode ? DarkMobile : LightMobile}
                    alt='Mobile image'
                    priority
                    fill
                    objectFit='contain'
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}>
                <Typography
                  variant='h3'
                  color='text.primary'
                  textTransform='uppercase'
                  textAlign={{ xs: 'center', md: 'left' }}
                  mb={{ xs: 2, md: 4 }}>
                  earn Rewards, anytime, anywhere.
                </Typography>
                <Grid
                  container
                  spacing={2}>
                  {data.map((item) => (
                    <Grid
                      key={Math.random()}
                      item
                      xs={12}
                      md={6}>
                      <Card>
                        <CardContent sx={{ p: { xs: 1.5, md: 3 } }}>
                          <Stack spacing={2}>
                            <Box
                              sx={{
                                borderRadius: 3,
                                height: { xs: 43, md: 54 },
                                width: { xs: 43, md: 54 },
                                bgcolor: alpha(theme.palette.primary.main, 0.2),
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Icon name={item.icon} />
                            </Box>
                            <Stack spacing={1.2}>
                              <Typography
                                variant='subtitle1'
                                fontSize={{ xs: 12, md: 18 }}
                                fontWeight={700}
                                color='text.primary'>
                                {item.title}
                              </Typography>
                              <Typography
                                variant='body1'
                                color={'text.secondary'}>
                                {item.detail}
                              </Typography>
                            </Stack>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

const data = [
  {
    title: 'Effortless Task',
    detail: 'Effortless automates workflow analysis to find inefficiencies.',
    icon: 'task-02',
  },
  {
    title: 'Referral Bonus',
    detail: 'A referral bonus rewards bringing in new hires through referrals.',
    icon: 'chart-relationship-1',
  },
  {
    title: 'Easy Withdraw',
    detail: 'Easy withdraw allows quick and hassle-free access to funds.',
    icon: 'bitcoin-withdraw-1',
  },
  {
    title: '24/7 Support',
    detail: '24/7 support provides round-the-clock assistance for users.',
    icon: 'customer-service-01',
  },
];
