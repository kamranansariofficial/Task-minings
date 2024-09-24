'use client'
import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, InputAdornment, Menu, MenuItem, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import DashboardCard from '@/components/cards/dashboardCard'
import Icon from '@/utils/icon'
import dynamic from 'next/dynamic'
import { merge } from 'lodash';
import { BaseOptionChart, ChartStyled } from '@/components/charts'
import { chartData } from './data'
import Popover from './popover/popover'
import Table from 'src/components/table/table';
import RecentTaskRow from '@/components/table/tableRows/recentTaskAdmin';
import { tableData } from './data';

const TABLE_HEAD = [
    { id: 'taskId', label: 'Task ID', alignRight: false },
    { id: 'name', label: 'Task Name', alignRight: false },
    { id: 'category', label: 'Category', alignRight: false },
    { id: 'reward', label: 'Reward', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
    { id: 'date', label: 'Submission date', alignRight: false },
    { id: 'action', label: 'Action', alignRight: false },
];
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
function AdminDashboard() {
    const [selectPerformance, setPerformance] = useState('Year');
    const [selectedStatus, setStatus] = useState('Pending');
    return (
        <Stack sx={{ gap: 2 }}>
            <Stack
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        md: 'repeat(auto-fit, minmax(300px, 1fr))',
                        xs: ' repeat(2, minmax(0, 1fr))'
                    },
                    gap: 2
                }}
            >
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
                        xs: ' repeat(3, minmax(0, 1fr))'
                    },
                    gap: 2
                }}
            >
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
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <Card sx={{ height: 1 }}>
                        <CardHeader

                            action={
                                <Popover
                                    options={['Week', 'Month', 'Year']}
                                    selected={selectPerformance}
                                    handleChange={(value: string) => {
                                        setPerformance(value)
                                    }
                                    }
                                />
                            }
                            title="Performance"

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

                                    options={merge(BaseOptionChart('area'), {
                                        xaxis: {
                                            position: "bottom",
                                            categories: [
                                                'Jan',
                                                'Feb',
                                                'Mar',
                                                'Apr',
                                                'May',
                                                'Jun',
                                            ],

                                            offsetY: 15,
                                            tooltip: {
                                                offsetY: 5
                                            }

                                        },

                                        grid: {
                                            show: true,
                                            strokeDashArray: 5,
                                            position: 'back',

                                        },
                                        stroke: {
                                            curve: 'smooth',
                                        }
                                        , legend: {
                                            show: true,
                                            position: 'bottom',
                                            horizontalAlign: 'center',
                                            offsetY: 10

                                        },
                                        markers: {


                                            customHTML: () => {
                                                return document.createElement('div')
                                                    .innerHTML = `<div class="apexcharts-marker custom-marker"><span></span></div>`

                                            }




                                        }
                                    }) as any}
                                    height={240}
                                />
                            </ChartStyled>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Card sx={{ height: 1 }}>
                        <CardHeader

                            action={
                                <Popover
                                    options={['Pending', 'Complete', 'Other']}
                                    selected={selectedStatus}
                                    handleChange={(value: string) => {
                                        setStatus(value)
                                    }
                                    }
                                />
                            }
                            title="Submitted Task"

                        />
                        <CardContent
                            sx={{

                            }}
                        >
                            <table className='custom-table-task'>
                                <thead>

                                    <th>
                                        <Typography color='text.secondary' fontWeight={700}>
                                            Task ID
                                        </Typography>
                                    </th>
                                    <th>
                                        <Typography color='text.secondary' fontWeight={700}>
                                            Task Name
                                        </Typography>
                                    </th>
                                    <th>
                                        <Typography color='text.secondary' fontWeight={700}>
                                            Status
                                        </Typography>
                                    </th>

                                </thead>
                                <tbody>
                                    {Array.from({ length: 3 }).map((_, idx) =>
                                        <tr key={idx}>
                                            <td align='center'>
                                                <Typography variant='body2' color='text.secondary' fontWeight={700}>
                                                    233546
                                                </Typography>
                                            </td>
                                            <td align='center'>
                                                <Typography variant='body2' color='text.secondary' fontWeight={600}>
                                                    Facebook like
                                                </Typography>
                                            </td>
                                            <td align="center">
                                                <Button size='small' variant='contained'>View</Button>
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button>
                                See all
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Card>
                <Stack p={3} pb={0} direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' alignItems='center'>
                    <Typography className='MuiCardHeader-title' variant='h6'>
                        Recent Tasks
                    </Typography>
                    <TextField placeholder='Search by name or id' size="small"
                        sx={{ minWidth: { md: 400 } }}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <Icon name="ic-search" transform='scale(.8)' />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                    <Stack direction='row' alignItems='center' spacing={2}>
                        <Button startIcon={<Icon name="ic-add" />} variant='outlined' color='secondary'>
                            Add Task
                        </Button>
                        <Button startIcon={<Icon name="ic-filter-horizontal" />} variant='outlined' color='secondary'>
                            All Tasks
                        </Button>
                    </Stack>
                </Stack>
                <Table
                    headData={TABLE_HEAD}
                    data={tableData}
                    isLoading={false}
                    heading={'Recent Tasks'}
                    row={RecentTaskRow}
                />
            </Card>
        </Stack>
    )
}

export default AdminDashboard