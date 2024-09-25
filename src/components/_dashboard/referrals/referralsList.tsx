'use client';
import React from 'react';
// components
import Table from 'src/components/table/table';
import data from './data.json';
import ReferralsRow from '@/components/table/tableRows/referralsRow';

const TABLE_HEAD = [
  { id: 'id', label: 'ID', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false, sort: true },
  { id: 'reward', label: 'Reward', alignRight: false },
  { id: 'action', label: 'Action', alignRight: true },
];

export default function ReferralsList() {
  return (
    <>
      <Table
        headData={TABLE_HEAD}
        data={data}
        isLoading={false}
        heading={'List of Referrals'}
        isFilter
        row={ReferralsRow}
      />
    </>
  );
}
