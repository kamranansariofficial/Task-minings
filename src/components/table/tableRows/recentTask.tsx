import React from 'react';
// mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  TableRow,
  Skeleton,
  TableCell,
  Typography,
  Stack,
  IconButton,
  Tooltip,
} from '@mui/material';
// icons
import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';

export default function RecentTaskList({ ...props }) {
  const { isLoading, row, handleClickOpen, handleClickOpenDelete, index } =
    props;
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
          index + 1
        )}
      </TableCell>
      <TableCell
        component='th'
        scope='row'
        sx={{
          textTransform: 'capitalize',
        }}>
        {isLoading ? <Skeleton variant='text' /> : row?.type}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton variant='text' /> : row?.airport}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton variant='text' /> : row.order}
      </TableCell>
      <TableCell align='right'>
        <Stack
          direction='row'
          justifyContent='flex-end'>
          {isLoading ? (
            <Skeleton
              variant='circular'
              width={34}
              height={34}
              sx={{ mr: 1 }}
            />
          ) : (
            <Tooltip title='Edit'>
              <IconButton onClick={handleClickOpen(row)}>
                <MdEdit />
              </IconButton>
            </Tooltip>
          )}
          {isLoading ? (
            <Skeleton
              variant='circular'
              width={34}
              height={34}
              sx={{ mr: 1 }}
            />
          ) : (
            <Tooltip title='Delete'>
              <IconButton onClick={handleClickOpenDelete(row._id)}>
                <MdDelete />
              </IconButton>
            </Tooltip>
          )}
        </Stack>
      </TableCell>
    </TableRow>
  );
}
