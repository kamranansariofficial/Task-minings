'use client';
import React from 'react';
// mui
import { alpha, Box, Paper, Rating, Stack, Typography } from '@mui/material';
import BgHEr from '../../../public/static/Topographic.png';
import AvatarImg from '../../../public/static/avatar-2png.png';
import Image from 'next/image';

export default function AuthCard() {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        position: 'relative',
        overflow: 'hidden',
        height: 'calc(100vh - 50px)',
        width: '100%',
        borderRadius: 7,
        bgcolor: '#EFEFEF',
        zIndex: 0,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <Box
        sx={{
          position: 'relative',
          height: 400,
        }}>
        <Image
          src={BgHEr}
          alt='dd'
          fill
          placeholder='blur'
          objectFit='cover'
        />
      </Box>
      <Box
        m={5.5}
        sx={{
          p: 3,
          borderRadius: 3,
          bgcolor: (theme) => alpha(theme.palette.common.black, 0.3),
        }}>
        <Stack
          direction='row'
          alignItems='center'
          spacing={2}
          mb={1}>
          <Image
            src={AvatarImg}
            alt='logo'
            width={62}
            height={62}
            layout='fixed'
            objectFit='cover'
            sizes={'100vh'}
          />
          <Stack>
            <Typography
              variant='subtitle1'
              color='common.white'>
              Robie Peter
            </Typography>
            <Typography
              variant='body2'
              color='common.white'>
              Store Manager
            </Typography>
            <Rating
              size='small'
              readOnly
              value={5}
            />
          </Stack>
        </Stack>
        <Typography
          variant='body2'
          color='common.white'>
          Lorem ipsum dolor sit amet consectetur. Euismod vitae et mauris nisl
          ultrices posuere. Eu ornare bibendum et augue dignissim orci pharetra
          nec eget. Faucibus consequat blandit velit ullamcorper pretium. Nunc
          euismod nibh ut ultrices pharetra mauris.
        </Typography>
      </Box>
    </Box>
  );
}
