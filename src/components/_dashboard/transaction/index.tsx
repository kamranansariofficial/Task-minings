'use client';
import React from 'react';
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
// components
import Table from 'src/components/table/table';
import data from './data.json';
import TransactionsRow from '@/components/table/tableRows/transactionRow';
import Search from '@/components/search';
import PaginationRounded from '@/components/pagination';
import TransactionsCard from '@/components/cards/transactionsCard';

const TABLE_HEAD = [
  { id: 'id', label: 'Transtion ID', alignRight: false },
  { id: 'date', label: 'Date', alignRight: false, sort: true },
  { id: 'time', label: 'Time', alignRight: false },
  { id: 'fee', label: 'Fee', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
  { id: 'amount', label: 'Amount', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '', label: 'Action', alignRight: true },
];

export default function TransactionsList() {
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
          row={TransactionsRow}
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
                spacing={2}>
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
                <TransactionsCard
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
