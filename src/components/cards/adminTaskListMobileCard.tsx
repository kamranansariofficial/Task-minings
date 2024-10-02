import Icon from '@/utils/icon';
import { Skeleton, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';

function AdminListMobileCard({ ...props }) {
  const { row, isLoading } = props;
  const theme = useTheme();
  return (
    <Stack
      sx={{
        display: 'grid',
        p: 2,
        borderBottom:
          theme.palette.mode === 'light'
            ? '1px solid rgba(247, 249, 249, 1)'
            : '1px solid rgba(22, 25, 29, 1)',
        '&:hover': { backgroundColor: 'rgba(145, 158, 171, 0.08)' },
        gridTemplateColumns: 'repeat(3, minmax(70px, 1fr))',
        gap: 2,
      }}>
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
          row.name
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
          row.date || row.createdAt
        )}
      </Typography>
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
              name='usdt'
              transform='scale(.7)'
            />{' '}
            {row?.reward}
          </>
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
          <>ID: {row.taskId || row._id}</>
        )}
      </Typography>
      <Typography
        fontWeight={700}
        color='info'
        fontSize={12}>
        {isLoading ? (
          <Skeleton
            variant='text'
            width={20}
          />
        ) : (
          <>{row.category}</>
        )}
      </Typography>
      <Typography
        textAlign='center'
        textTransform={'capitalize'}
        fontWeight={700}
        color='error'
        fontSize={12}>
        {isLoading ? (
          <Skeleton
            variant='text'
            width={20}
          />
        ) : (
          <>{row.status}</>
        )}
      </Typography>
    </Stack>
  );
}

export default AdminListMobileCard;
