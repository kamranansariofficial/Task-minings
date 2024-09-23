import React from 'react';
// mui
import {
  alpha,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
// icons
import TaskEdit from '../../../public/static/icons/bitcoin-cpu-1.svg';

export default function DashboardCard({ ...props }) {
  const { title, detail, icon, isPrimary } = props;
  const theme = useTheme();
  return (
    <Card>
      <CardContent
        sx={{
          px: 5,
        }}>
        <Stack
          direction={{ xs: 'row', md: 'row' }}
          alignItems={{ xs: 'center', md: 'center' }}
          spacing={2}
          justifyContent='space-between'>
          <Stack spacing={0.2}>
            <Typography
              variant='subtitle2'
              color='text.secondary'>
              {title}
            </Typography>
            <Typography
              variant='h5'
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
              }}
              color={isPrimary ? 'primary' : 'text.primary'}>
              {isPrimary && <TaskEdit />}
              {detail}
            </Typography>
          </Stack>
          <Box
            sx={{
              borderRadius: 3,
              height: 43,
              width: 43,
              bgcolor: alpha(theme.palette.text.secondary, 0.3),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {icon}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
