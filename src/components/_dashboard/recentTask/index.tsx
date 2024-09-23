'use client';
import React, { useState } from 'react';
import Table from 'src/components/table/table';
// import BlogsRow from '@/components/table/tableRows/blogs';
const TABLE_HEAD = [
  { id: 'id', label: 'Task ID', alignRight: false },
  { id: 'name', label: 'Task Name', alignRight: false, sort: true },
  { id: 'reward', label: 'Reward', alignRight: false, sort: true },
];

export default function BlogsList() {
  return (
    <>
      sdds
      {/* <Table
        headData={TABLE_HEAD}
        data={data}
        isLoading={false}
        row={BlogsRow}
      /> */}
    </>
  );
}
