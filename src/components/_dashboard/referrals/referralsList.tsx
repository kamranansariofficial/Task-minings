'use client';
import React from 'react';
// components
import Table from 'src/components/table/table';
import data from './data.json';
import ReferralsRow from '@/components/table/tableRows/referralsRow';
import { useMediaQuery, useTheme } from '@mui/material';

const TABLE_HEAD = [
  { id: 'id', label: 'ID', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false, sort: true },
  { id: 'reward', label: 'Reward', alignRight: false },
  { id: 'action', label: 'Action', alignRight: true },
];
const TABLE_HEAD_MOBILE = [
  { id: 'id', label: 'ID', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false, sort: true },
  { id: 'reward', label: 'Reward', alignRight: false },
];

export default function ReferralsList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Table
        headData={isMobile ? TABLE_HEAD_MOBILE : TABLE_HEAD}
        data={data}
        isLoading={false}
        heading={'List of Referrals'}
        isFilter
        row={ReferralsRow}
      />
    </>
  );
}
