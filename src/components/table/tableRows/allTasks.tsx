import React from 'react';
// mui
import {
  TableRow,
  Skeleton,
  TableCell,
  Typography,
  Button,
  useTheme,
} from '@mui/material';
// icons
import BitCoin from '../../../../public/static/icons/usdt.svg';
import Label from '@/components/label';
import { useRouter } from 'next-nprogress-bar';

export default function AllTaskRow({ ...props }) {
  const { isLoading, row } = props;
  const router = useRouter();
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
        {isLoading ? <Skeleton variant='text' /> : row?.createdAt}
      </TableCell>
      <TableCell align='right'>
        <Button
          onClick={() => router.push(`/dashboard/task/${row?._id}`)}
          variant='contained'
          size='small'
          color='primary'>
          Start
        </Button>
      </TableCell>
    </TableRow>
  );
}
