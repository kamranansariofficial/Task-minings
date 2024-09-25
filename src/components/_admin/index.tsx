'use client';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import DashboardCard from '@/components/cards/dashboardCard';
import Icon from '@/utils/icon';
import dynamic from 'next/dynamic';
import { merge } from 'lodash';
import { BaseOptionChart, ChartStyled } from '@/components/charts';
import { chartData } from './data';
import Popover from './popover/popover';
import Table from 'src/components/table/table';
import RecentTaskRow from '@/components/table/tableRows/taskListAdmin';
import { tableData } from './data';
import { ActionMenu } from '@/components/actionMenu';
import Search from '../search';
import AdminTaskListMobileCard from '../cards/adminTaskListMobileCard';

const TABLE_HEAD = [
  { id: 'taskId', label: 'Task ID', alignRight: false },
  { id: 'name', label: 'Task Name', alignRight: false },
  { id: 'category', label: 'Category', alignRight: false },
  { id: 'reward', label: 'Reward', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'date', label: 'Submission date', alignRight: false },
  { id: 'action', label: 'Action', alignRight: true },
];
const popoverMenu = [
  {
    label: 'Task Details',
    action: 'VIEW-DETAILS',
    icon: 'ic-arrow-out',
  },
  {
    label: 'Open Project',
    action: 'OPEN-PROJECT',
    icon: 'ic-arrow-out',
  },
  {
    label: 'Edit Task',
    action: 'EDIT-TASK',
    icon: 'ic-pencil',
  },
  {
    label: 'Delete Task',
    action: 'DELETE-TASK',
    icon: 'ic-trash-error',
  },
];
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
function AdminDashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectPerformance, setPerformance] = useState('Year');
  const [selectedStatus, setStatus] = useState('Pending');
  const [contextMenu, setContextMenu] = React.useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);
  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };
  const handleTableEvent = ({
    action,
    event,
    row,
  }: {
    action: string;
    event?: any;
    row: any;
  }) => {
    switch (action) {
      case 'OPEN-POPOVER':
        handleContextMenu(event);
        break;
    }
  };
  const handleMenuEvent = (action: string) => {
    switch (action) {
      case 'VIEW-DETAILS':
        console.log(action);
        break;
      case 'OPEN-PROJECT':
        break;
      case 'EDIT-TASK':
        break;
      case 'DELETE-TASK':
        break;
    }
  };
  return (
    <Stack sx={{ gap: 2 }}>
      <Stack
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            md: 'repeat(auto-fit, minmax(300px, 1fr))',
            xs: ' repeat(2, minmax(0, 1fr))',
          },
          gap: 2,
        }}>
        <DashboardCard
          title='Total Tasks'
          detail='780'
          icon={<Icon name='ic-task' />}
        />
        <DashboardCard
          title='Total Users'
          detail='780'
          icon={<Icon name='ic-user-group' />}
        />
      </Stack>
      <Stack
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            md: 'repeat(auto-fit, minmax(300px, 1fr))',
            xs: ' repeat(3, minmax(0, 1fr))',
          },
          gap: 2,
        }}>
        <DashboardCard
          title='Active Task'
          detail='780'
          icon={<Icon name='ic-task-done' />}
        />
        <DashboardCard
          title='Submitted Tasks'
          detail='780'
          icon={<Icon name='ic-task' />}
        />
        <DashboardCard
          title='Rejected Tasks'
          detail='780'
          icon={<Icon name='ic-task-remove' />}
        />
      </Stack>
      <Grid
        container
        spacing={2}>
        <Grid
          item
          xs={12}
          md={7}>
          <Card sx={{ height: 1 }}>
            <CardHeader
              action={
                <Popover
                  options={['Week', 'Month', 'Year']}
                  selected={selectPerformance}
                  handleChange={(value: string) => {
                    setPerformance(value);
                  }}
                />
              }
              title='Performance'
            />
            <CardContent>
              <ChartStyled>
                <Chart
                  type='line'
                  series={[
                    {
                      type: 'line',
                      name: '$',
                      data: chartData.salesReport.series1,
                    },
                    {
                      type: 'line',
                      name: '$',
                      data: chartData.salesReport.series2,
                    },
                  ]}
                  options={
                    merge(BaseOptionChart('area'), {
                      xaxis: {
                        position: 'bottom',
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],

                        offsetY: 15,
                        tooltip: {
                          offsetY: 5,
                        },
                      },

                      grid: {
                        show: true,
                        strokeDashArray: 5,
                        position: 'back',
                      },
                      stroke: {
                        curve: 'smooth',
                      },
                      legend: {
                        show: true,
                        position: 'bottom',
                        horizontalAlign: 'center',
                        offsetY: 10,
                      },
                      markers: {
                        customHTML: () => {
                          return (document.createElement(
                            'div'
                          ).innerHTML = `<div class="apexcharts-marker custom-marker"><span></span></div>`);
                        },
                      },
                    }) as any
                  }
                  height={240}
                />
              </ChartStyled>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}>
          <Card sx={{ height: 1 }}>
            <CardHeader
              action={
                <Popover
                  options={['Pending', 'Complete', 'Other']}
                  selected={selectedStatus}
                  handleChange={(value: string) => {
                    setStatus(value);
                  }}
                />
              }
              title='Submitted Task'
            />
            <CardContent sx={{}}>
              <table className='custom-table-task'>
                <thead>
                  <tr>
                    <th>
                      <Typography
                        color='text.secondary'
                        fontWeight={700}>
                        Task ID
                      </Typography>
                    </th>
                    <th>
                      <Typography
                        color='text.secondary'
                        fontWeight={700}>
                        Task Name
                      </Typography>
                    </th>
                    <th>
                      <Typography
                        color='text.secondary'
                        fontWeight={700}>
                        Status
                      </Typography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <tr key={idx}>
                      <td align='center'>
                        <Typography
                          variant='body2'
                          color='text.secondary'
                          fontWeight={700}>
                          233546
                        </Typography>
                      </td>
                      <td align='center'>
                        <Typography
                          variant='body2'
                          color='text.secondary'
                          fontWeight={600}>
                          Facebook like
                        </Typography>
                      </td>
                      <td align='center'>
                        <Button
                          size='small'
                          variant='contained'>
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button>See all</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      {!isMobile ? (
        <Table
          headData={TABLE_HEAD}
          data={tableData}
          isLoading={false}
          heading={'Recent Tasks'}
          isSearch
          isFilter
          {...{ handleTableEvent }}
          row={RecentTaskRow}
        />
      ) : (
        <Card>
          <CardHeader
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              p: 2,
              gap: 2,
              '.MuiCardHeader-title': { fontSize: 16 },
              '.MuiCardHeader-action': { width: 1 },
            }}
            title='Tasks List'
            action={
              <Stack
                direction='row'
                alignItems='center'
                spacing={1}>
                <Box sx={{ flex: 1, '.MuiInputBase-root': { width: 1 } }}>
                  <Search />
                </Box>
                <FormControl sx={{ flex: 0.3 }}>
                  <Select
                    labelId={'select-1'}
                    id={'select-1'}
                    size='small'
                    value={'All'}>
                    <MenuItem value={'All'}>All</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            }
          />
          <CardContent sx={{ p: 0, pt: 5 }}>
            {tableData.data.map((row, idx) => (
              <AdminTaskListMobileCard
                isLoading={false}
                key={idx}
                row={row}
              />
            ))}
          </CardContent>
        </Card>
      )}

      <ActionMenu
        {...{
          handleClose,
          contextMenu,
          paperSx: { ul: { p: 0.3, li: { borderRadius: 1 } } },
        }}>
        {popoverMenu.map((item, idx) => (
          <div key={idx}>
            {item.label === 'Delete Task' && (
              <Divider sx={{ borderStyle: 'dashed', mx: -0.3, my: 1 }} />
            )}
            <MenuItem
              onClick={() => {
                handleMenuEvent(item.action);
                handleClose();
              }}>
              <Stack
                direction='row'
                alignItems='center'
                spacing={1}>
                <Icon name={item.icon} />
                <Typography
                  fontWeight={500}
                  color={
                    item.label === 'Delete Task' ? 'error' : 'text.primary'
                  }
                  variant='body2'>
                  {item.label}
                </Typography>
              </Stack>
            </MenuItem>
          </div>
        ))}
      </ActionMenu>
    </Stack>
  );
}

export default AdminDashboard;
