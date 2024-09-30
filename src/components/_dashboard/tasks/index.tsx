'use client';
import React from 'react';
// components
import Table from 'src/components/table/table';
import data from './data.json';
import AllTaskRow from '@/components/table/tableRows/allTasks';
import Search from '@/components/search';
import AllTasksCard from '@/components/cards/allTaskMobileCard';

// mui
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  MenuItem,
  Select,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PaginationRounded from '@/components/pagination';

const TABLE_HEAD = [
  { id: 'id', label: 'Task ID', alignRight: false },
  { id: 'name', label: 'Task Name', alignRight: false, sort: true },
  { id: 'name', label: 'Category', alignRight: false },
  { id: 'reward', label: 'Reward', alignRight: false },
  { id: 'date', label: 'Post date', alignRight: false },
  { id: '', label: 'Action', alignRight: true },
];

export default function AllTaskList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {!isMobile ? (
        <Table
          headData={TABLE_HEAD}
          data={data}
          isLoading={false}
          isSearch
          isFilter
          row={AllTaskRow}
        />
      ) : (
        <Card>
          <CardHeader
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              p: 2,
              gap: 2,
              '.MuiCardHeader-title': { fontSize: 16 },
              '.MuiCardHeader-action': { width: 1 },
            }}
            action={
              <Stack
                direction='row'
                alignItems='center'
                spacing={1}>
                <Box sx={{ flex: 1, '.MuiInputBase-root': { width: 1 } }}>
                  <Search />
                </Box>
                <FormControl sx={{ flex: 0.3 }}>
                  <Select
                    labelId={'select-1'}
                    id={'select-1'}
                    size='small'
                    value={'All'}>
                    <MenuItem value={'All'}>All</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            }
          />
          <CardContent sx={{ p: 0, pt: 5 }}>
            {data.data.map((row, idx) => (
              <React.Fragment key={idx}>
                <AllTasksCard
                  isLoading={false}
                  row={row}
                />
                {/* {idx !== data.data.length - 1 && <Divider />} */}
              </React.Fragment>
            ))}
            <PaginationRounded data={data} />
          </CardContent>
        </Card>
      )}
    </>
  );
}
