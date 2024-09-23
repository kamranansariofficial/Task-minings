'use client';
import React from 'react';
// components
import Table from 'src/components/table/table';
import data from './data.json';
import AllTaskRow from '@/components/table/tableRows/allTasks';

const TABLE_HEAD = [
  { id: 'id', label: 'Task ID', alignRight: false },
  { id: 'name', label: 'Task Name', alignRight: false, sort: true },
  { id: 'name', label: 'Category', alignRight: false },
  { id: 'reward', label: 'Reward', alignRight: false },
  { id: 'date', label: 'Post date', alignRight: false },
  { id: '', label: 'Action', alignRight: true },
];

export default function AllTaskList() {
  return (
    <>
      <Table
        headData={TABLE_HEAD}
        data={data}
        isLoading={false}
        isSearch
        isFilter
        row={AllTaskRow}
      />
    </>
  );
}
