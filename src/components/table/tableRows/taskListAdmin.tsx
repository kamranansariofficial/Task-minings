import React from 'react';
// mui
import { TableRow, Skeleton, TableCell, Typography, useTheme, Stack, IconButton } from '@mui/material';
import Label from '@/components/label';
import Icon from '@/utils/icon';
// icons


export default function RecentTaskList({ ...props }) {
  const { isLoading, row, handleTableEvent } = props;
  const theme = useTheme();
  return (
    <TableRow
      hover
      key={Math.random()}>
      <TableCell
        component='th'
        scope='row'
      >
        {isLoading ? (
          <Skeleton
            variant='text'
            width={20}
          />
        ) : (
          row.taskId
        )}
      </TableCell>
      <TableCell
      >
        {isLoading ? (
          <Skeleton
            variant='text'
            width={20}
          />
        ) : (
          row.name
        )}
      </TableCell>
      <TableCell
      >
        {isLoading ? (
          <Skeleton
            variant='text'
            width={20}
          />
        ) : (
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'ghost'}
            color={
              (row?.category === 'like' && 'primary') ||
              (row?.category === 'join' && 'secondary') ||
              'info'
            }>
            {row.category}
          </Label>
        )}
      </TableCell>
      <TableCell>
        {isLoading ? (
          <Skeleton variant='text' />
        ) : (
          <Typography
            variant='body1'
            color='primary'
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}>
            <Icon name="usdt" /> {row?.reward}
          </Typography>
        )}
      </TableCell>
      <TableCell
      >
        {isLoading ? (
          <Skeleton
            variant='text'
            width={20}
          />
        ) : (
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'ghost'}
            color={
              (row?.status === 'pending' && 'error') ||
              (row?.status === 'complete' && 'primary') ||
              'info'
            }>
            {row.status}
          </Label>
        )}
      </TableCell>
      <TableCell
      >
        {isLoading ? (
          <Skeleton
            variant='text'
            width={20}
          />
        ) : (
          row.date
        )}
      </TableCell>
      <TableCell
      >
        {isLoading ? (
          <Skeleton
            variant='text'
            width={20}
          />
        ) : (
          <Stack direction='row' alignItems="center" justifyContent='flex-end'>
            <IconButton onClick={() => handleTableEvent({ row, action: 'ON-EDIT' })}>
              <Icon name="ic-pencil-edit" />
            </IconButton>
            <IconButton onClick={() => handleTableEvent({ row, action: 'ON-DELETE' })}>
              <Icon name="ic-delete" />
            </IconButton>
            <IconButton onClick={(event) => handleTableEvent({ row, action: 'OPEN-POPOVER', event })}>
              <Icon name="ic-more" />
            </IconButton>
          </Stack>
        )}
      </TableCell>
    </TableRow>
  );
}
