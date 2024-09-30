'use client';
import React from 'react';
// mui
import { Box, Grid, Stack } from '@mui/material';
// component
import DashboardCard from '../cards/dashboardCard';
// icons
import TaskEdit from '../../../public/static/icons/task-edit-02.svg';
import TaskComplete from '../../../public/static/icons/checkmark-square-01.svg';
import TaskLoading from '../../../public/static/icons/loading-01.svg';
import Taskdollar from '../../../public/static/icons/save-money-dollar.svg';
import TaskCoin from '../../../public/static/icons/bitcoin-cpu-1.svg';
import RecentTaskList from './recentTask';
import IncomeChart from '../charts/sale';
import config from './config.json';
import AllSubmissionsList from '@/components/_dashboard/submissions/allSubmissions';

export default function MainDashboard() {
  const sales_report = config?.data?.salesReport;
  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}>
        <Grid
          item
          xs={6}
          md={6}>
          <DashboardCard
            title='Available Tasks'
            detail='450'
            icon={<TaskEdit />}
          />
        </Grid>
        <Grid
          item
          xs={6}
          md={6}>
          <DashboardCard
            title='Tasks Completed'
            detail='780'
            icon={<TaskComplete />}
          />
        </Grid>{' '}
        <Grid
          item
          xs={4}
          md={4}>
          <DashboardCard
            title='Pending Verifications'
            detail='78'
            icon={<TaskLoading />}
          />
        </Grid>{' '}
        <Grid
          item
          xs={4}
          md={4}>
          <DashboardCard
            title='Rewards Earned'
            detail='13,583'
            isPrimary
            icon={<TaskCoin />}
          />
        </Grid>{' '}
        <Grid
          item
          xs={4}
          md={4}>
          <DashboardCard
            title='Total Withdrawal'
            detail='3,550'
            isPrimary
            icon={<Taskdollar />}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}>
          <RecentTaskList />
        </Grid>
        <Grid
          item
          xs={12}
          md={7}>
          <Stack spacing={3}>
            <IncomeChart
              data={sales_report}
              isLoading={false}
            />
            <AllSubmissionsList />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
