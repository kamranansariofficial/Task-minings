import Icon from '@/utils/icon';
import { Skeleton, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';

function TransactionsCard({ ...props }) {
  const theme = useTheme();
  const { row, isLoading } = props;
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      sx={{
        p: 2,
        borderBottom:
          theme.palette.mode === 'light'
            ? '1px solid rgba(247, 249, 249, 1)'
            : '1px solid rgba(22, 25, 29, 1)',
        '&:hover': { backgroundColor: 'rgba(145, 158, 171, 0.08)' },
      }}>
      <Stack spacing={1}>
        <Typography
          fontWeight={600}
          color='text.secondary'
          fontSize={12}>
          {isLoading ? (
            <Skeleton
              variant='text'
              width={20}
            />
          ) : (
            row.email
          )}
        </Typography>
        <Typography
          fontWeight={700}
          color='text.secondary'
          fontSize={12}>
          {isLoading ? (
            <Skeleton
              variant='text'
              width={20}
            />
          ) : (
            <>ID: {row._id}</>
          )}
        </Typography>
      </Stack>
      <Stack spacing={1}>
        <Typography
          fontWeight={600}
          color='text.secondary'
          fontSize={12}>
          {isLoading ? (
            <Skeleton
              variant='text'
              width={20}
            />
          ) : (
            row.createdAt
          )}
        </Typography>
        <Typography
          fontWeight={600}
          color='text.secondary'
          fontSize={12}>
          {isLoading ? (
            <Skeleton
              variant='text'
              width={20}
            />
          ) : (
            row.time
          )}
        </Typography>
      </Stack>
      <Stack spacing={1}>
        <Typography
          variant='body2'
          color='primary'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}>
          {isLoading ? (
            <Skeleton
              variant='text'
              width={20}
            />
          ) : (
            <>
              <Icon
                name='bitcoin-cpu-1'
                transform='scale(.7)'
              />{' '}
              {row?.reward}
            </>
          )}
        </Typography>
        <Typography
          textAlign='center'
          textTransform={'capitalize'}
          fontWeight={600}
          color={row.status === 'complete' ? 'primary' : 'error'}
          fontSize={12}>
          {isLoading ? (
            <Skeleton
              variant='text'
              width={20}
            />
          ) : (
            row.status
          )}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default TransactionsCard;
