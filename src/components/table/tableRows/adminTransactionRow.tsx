import React from 'react';
// mui
import {
  TableRow,
  Skeleton,
  TableCell,
  Typography,
  Button,
  useTheme,
  alpha,
  IconButton,
} from '@mui/material';
// icons
import { HiDotsVertical } from 'react-icons/hi';

import Label from '@/components/label';
import Icon from '@/utils/icon';

export default function TransactionsRow({ ...props }) {
  const { isLoading, row } = props;
  const theme = useTheme();

  return (
    <TableRow
      hover
      key={Math.random()}>
      <TableCell
        component='th'
        scope='row'
        sx={{
          textTransform: 'uppercase',
        }}>
        {isLoading ? (
          <Skeleton
            variant='text'
            width={20}
          />
        ) : (
          row._id
        )}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton variant='text' /> : row?.createdAt}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton variant='text' /> : row?.time}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton variant='text' /> : row?.email}
      </TableCell>
      <TableCell>
        {isLoading ? (
          <Skeleton variant='text' />
        ) : (
          <Typography
            variant='body2'

          >
            {row?.type}
          </Typography>
        )}
      </TableCell>


      <TableCell>
        {isLoading ? (
          <Skeleton variant='text' />
        ) : (
          <Typography
            variant='body2'
            color='primary'
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}>
            <Icon name='bitcoin-cpu-1' /> {row?.amount}
          </Typography>
        )}
      </TableCell>
      <TableCell>
        {isLoading ? (
          <Skeleton variant='text' />
        ) : (
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={
              (row?.status === 'complete' && 'primary') ||
              (row?.status === 'rejected' && 'secondary') ||
              'error'
            }>
            {row.status}
          </Label>
        )}
      </TableCell>
      <TableCell align='right'>
        <IconButton>
          <HiDotsVertical size={18} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
