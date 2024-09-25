'use client';
import React from 'react';
// components
import Table from 'src/components/table/table';
import data from './data.json';
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

export default function TransactionsList() {
  return (
    <>
      <Table
        headData={TABLE_HEAD}
        data={data}
        isLoading={false}
        isSearch
        isFilter
        row={TransactionsRow}
      />
    </>
  );
}
