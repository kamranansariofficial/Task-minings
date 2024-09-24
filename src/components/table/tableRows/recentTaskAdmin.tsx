import React from 'react';
// mui
import { TableRow, Skeleton, TableCell, Typography } from '@mui/material';
// icons


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
          row.taskId
        )}
      </TableCell>
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
          row.name
        )}
      </TableCell>
    </TableRow>
  );
}
