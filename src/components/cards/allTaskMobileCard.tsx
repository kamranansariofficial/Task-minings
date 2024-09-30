import Icon from '@/utils/icon';
import {
  IconButton,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';

function AllTasksCard({ ...props }) {
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
            row.name
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
      <Stack
        direction='row'
        alignItems='center'
        spacing={2}>
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
            textAlign='end'
            textTransform={'capitalize'}
            fontWeight={600}
            color={
              (row?.category === 'share' && 'primary') ||
              (row?.category === 'join' && 'secondary') ||
              'info'
            }
            fontSize={12}>
            {isLoading ? (
              <Skeleton
                variant='text'
                width={20}
              />
            ) : (
              row.category
            )}
          </Typography>
        </Stack>
        <IconButton
          sx={{
            borderRadius: 2,
            border: '1px solid' + theme.palette.divider,
          }}>
          <Icon name='bookmark' />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default AllTasksCard;
