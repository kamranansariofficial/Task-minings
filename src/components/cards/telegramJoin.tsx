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
import TeleImg from '@public/static/telegram.png';

export default function TelegramJoinCard({ ...props }) {
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
          <Typography variant='h5'>Join Telegram</Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            textAlign='center'
            sx={{
              maxWidth: 450,
              pb: 1,
            }}>
            Join our Telegram community for the latest updates, exclusive
            content, and engaging discussions! Click the link to connect with
            us.
          </Typography>
          <Box>
            <Button
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
