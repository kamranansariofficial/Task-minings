'use client';
import React from 'react';
// components
import Table from 'src/components/table/table';
import RecentTaskRow from '@/components/table/tableRows/recentTask';
import data from './data.json';

const TABLE_HEAD = [
  { id: 'id', label: 'Task ID', alignRight: false },
  { id: 'name', label: 'Task Name', alignRight: false, sort: true },
  { id: 'reward', label: 'Reward', alignRight: true },
];

export default function RecentTaskList() {
  return (
    <>
      <Table
        headData={TABLE_HEAD}
        data={data}
        isLoading={false}
        heading={'Recent Tasks'}
        row={RecentTaskRow}
      />
    </>
  );
}
