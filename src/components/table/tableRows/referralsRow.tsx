'use client';
import React from 'react';
// mui
import {
  TableRow,
  Skeleton,
  TableCell,
  Typography,
  IconButton,
  useTheme,
} from '@mui/material';
// icons
import BitCoin from '../../../../public/static/icons/bitcoin-cpu-1.svg';
import { LuEye } from 'react-icons/lu';

export default function ReferralsRow({ ...props }) {
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
              alignItems: 'center',
              gap: 1,
            }}>
            <BitCoin /> {row?.reward}
          </Typography>
        )}
      </TableCell>
      <TableCell align='right'>
        {isLoading ? (
          <Skeleton
            variant='circular'
            width={34}
            height={34}
          />
        ) : (
          <IconButton>
            <LuEye size={18} />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
}
