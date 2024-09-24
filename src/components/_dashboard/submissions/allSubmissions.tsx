'use client';
import React from 'react';
// components
import Table from 'src/components/table/table';
import data from './data.json';
import AllSubmissionsRow from '@/components/table/tableRows/allSubmissions';

const TABLE_HEAD = [
  { id: 'id', label: 'Task ID', alignRight: false },
  { id: 'name', label: 'Task Name', alignRight: false, sort: true },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'reward', label: 'Reward', alignRight: false },
  { id: 'action', label: 'Action', alignRight: true },
];

export default function AllSubmissionsList() {
  return (
    <>
      <Table
        headData={TABLE_HEAD}
        data={data}
        isLoading={false}
        heading={'All Submissions'}
        row={AllSubmissionsRow}
      />
    </>
  );
}
