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
} from '@mui/material';
// icons
import BitCoin from '../../../../public/static/icons/bitcoin-cpu-1.svg';
import MoneyBag from '../../../../public/static/icons/trendy-design-icon-of-money-bag.svg';
import Label from '@/components/label';

export default function SubmissionsRow({ ...props }) {
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
      <TableCell>
        {isLoading ? (
          <Skeleton variant='text' />
        ) : (
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'ghost'}
            color={
              (row?.category === 'share' && 'primary') ||
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
            <BitCoin /> {row?.reward}
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
              (row?.status === 'approved' && 'primary') ||
              (row?.status === 'rejected' && 'secondary') ||
              'error'
            }>
            {row.status}
          </Label>
        )}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton variant='text' /> : row?.createdAt}
      </TableCell>
      <TableCell align='right'>
        <Button
          variant='contained'
          color='primary'
          endIcon={
            row?.status === 'approved' &&
            row?.action !== 'claimed' && <MoneyBag />
          }
          sx={{
            minWidth: 110,
            borderRadius: 3,
            bgcolor:
              row?.status === 'rejected'
                ? alpha(theme.palette.primary.main, 0.2)
                : row?.status === 'pending'
                ? alpha(theme.palette.grey[800], 0.2)
                : row?.action === 'claimed'
                ? theme.palette.grey[500]
                : theme.palette.primary.main,
            color:
              row?.status === 'rejected'
                ? theme.palette.primary.main
                : row?.status === 'pending'
                ? theme.palette.grey[600]
                : theme.palette.common.white,
          }}>
          {row?.action}
        </Button>
      </TableCell>
    </TableRow>
  );
}
