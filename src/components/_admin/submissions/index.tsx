'use client';
import React from 'react';
// components
import Table from 'src/components/table/table';
import data from './data.json';
import SubmissionsRow from '@/components/table/tableRows/submissions';
import { Box, Card, CardContent, CardHeader, FormControl, MenuItem, Select, Stack, useMediaQuery, useTheme } from '@mui/material';
import Search from '@/components/search';
import AdminTaskListMobileCard from '@/components/cards/adminTaskListMobileCard';

const TABLE_HEAD = [
  { id: 'id', label: 'Task ID', alignRight: false },
  { id: 'name', label: 'Task Name', alignRight: false, sort: true },
  { id: 'name', label: 'Category', alignRight: false },
  { id: 'reward', label: 'Reward', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'date', label: 'Submission date', alignRight: false },
  { id: '', label: 'Action', alignRight: true },
];

export default function SubmissionsList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <>
      {!isMobile ? (
        <Table
          headData={TABLE_HEAD}
          data={data}
          isLoading={false}
          isSearch
          isFilter
          heading="Submitted Task"
          row={SubmissionsRow}
        />)
        :
        <Card>
          <CardHeader sx={{ flexDirection: 'column', alignItems: 'flex-start', p: 2, gap: 2, ".MuiCardHeader-title": { fontSize: 16 }, '.MuiCardHeader-action': { width: 1 } }} title="Tasks List"
            action={
              <Stack direction='row' alignItems='center' spacing={1}>
                <Box sx={{ flex: 1, '.MuiInputBase-root': { width: 1 } }}>
                  <Search />
                </Box>
                <FormControl
                  sx={{ flex: .3 }}
                >

                  <Select

                    labelId={'select-1'}
                    id={'select-1'}
                    size="small"
                    value={'All'}
                  >


                    <MenuItem
                      value={'All'}
                    >
                      All
                    </MenuItem>

                  </Select>
                </FormControl>
              </Stack>
            }
          />
          <CardContent sx={{ p: 0, pt: 5 }}>
            {data.data.map((row, idx) => (
              <AdminTaskListMobileCard isLoading={false} key={idx} row={row} />
            ))}

          </CardContent>
        </Card>
      }
    </>
  );
}
