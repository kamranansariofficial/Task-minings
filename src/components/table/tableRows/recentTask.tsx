import React from 'react';
// mui
import { TableRow, Skeleton, TableCell, Typography } from '@mui/material';
// icons
import BitCoin from '../../../../public/static/icons/bitcoin-cpu-1.svg';

export default function RecentTaskList({ ...props }) {
  const { isLoading, row } = props;
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
      <TableCell
        component='th'
        scope='row'
        sx={{
          textTransform: 'capitalize',
        }}>
        {isLoading ? <Skeleton variant='text' /> : row?.name}
      </TableCell>
      <TableCell align='right'>
        {isLoading ? (
          <Skeleton variant='text' />
        ) : (
          <Typography
            variant='body1'
            color='primary'
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              gap: 1,
            }}>
            <BitCoin /> {row?.reward}
          </Typography>
        )}
      </TableCell>
    </TableRow>
  );
}
