import React from 'react';
// mui
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import Image from 'next/image';
import TeleImg from '@public/static/like.png';

export default function LikePostCard({ ...props }) {
  const { handleNext } = props;
  return (
    <Card>
      <CardContent>
        <Stack
          justifyContent='center'
          alignItems='center'
          spacing={2}
          my={4}>
          <Box
            sx={{
              position: 'relative',
              height: 64,
              width: 64,
            }}>
            <Image
              src={TeleImg}
              priority
              alt='telegram'
              fill
              objectFit='contain'
            />
          </Box>
          <Typography variant='h5'>Like post</Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            textAlign='center'
            sx={{
              maxWidth: 450,
              pb: 1,
            }}>
            Enjoyed this post? Give it a like and
            <br /> show your support!
          </Typography>
          <Box>
            <Button
              onClick={handleNext}
              variant='contained'
              color='primary'>
              Join now
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
