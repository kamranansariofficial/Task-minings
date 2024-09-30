'use client';
import React from 'react';
// mui
import { Box, Card, CardContent } from '@mui/material';
// component
import Table from 'src/components/table/table';
import WithdrawalTimeline from './withdrawalTimeline';
import data from '@/components/_dashboard/transaction/data.json';
import TransactionsRow from '@/components/table/tableRows/transactionRow';

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

export default function WithdrawalOnly() {
  return (
    <Box>
      <Table
        headData={TABLE_HEAD}
        data={data}
        isLoading={false}
        isSearch
        isFilter
        isTimeline
        heading='Recent Withdraw'
        row={TransactionsRow}
      />
    </Box>
  );
}
