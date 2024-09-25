'use client'
import DashboardCard from '@/components/cards/dashboardCard'
import Table from '@/components/table/table'
import Icon from '@/utils/icon'
import { Box, Card, CardContent, CardHeader, FormControl, Stack, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery, useTheme } from '@mui/material'
import data from './data.json';
import React from 'react'
import GeneralUsersRow from '@/components/table/tableRows/generalUser'
import GeneralUserMobileCard from '@/components/cards/generalUserMobileCard'
import Search from '@/components/search'
const TABLE_HEAD = [
    { id: 'userId', label: 'User ID', alignRight: false },
    { id: 'name', label: 'Name', alignRight: false },
    { id: 'phone', label: 'Phone', alignRight: false },
    { id: 'subscriptions', label: 'Subscriptions', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
    { id: 'country', label: 'Country', alignRight: false },
    { id: 'action', label: 'Action', alignRight: true },
];
function GeneralUsers() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [status, setStatus] = React.useState('all');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        if (newAlignment !== null) {
            setStatus(newAlignment);
        }
    };
    return (
        <>
            <Stack
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        md: 'repeat(auto-fit, minmax(200px, 1fr))',
                        xs: ' repeat(2, minmax(0, 1fr))',
                    },
                    gap: 2,
                }}>

                <DashboardCard
                    title='Total Users'
                    detail='780'
                    icon={<Icon name='ic-user-group' />}
                />
                <DashboardCard
                    title='Active Users'
                    detail='780'
                    icon={<Icon name='ic-user-group' />}
                />
                <DashboardCard
                    title='Pending Users'
                    detail='780'
                    icon={<Icon name='ic-user-group' />}
                />
                <DashboardCard
                    title='Inactive Users'
                    detail='780'
                    icon={<Icon name='ic-user-group' />}
                />
            </Stack>
            <Stack mt={5}>
                {!isMobile ? (
                    <Table
                        headData={TABLE_HEAD}
                        data={data}
                        isLoading={false}
                        heading={'Recent Tasks'}
                        isSearch
                        isFilter
                        row={GeneralUsersRow}
                    />
                ) : (
                    <Card>
                        <CardHeader sx={{ flexDirection: 'column', alignItems: 'flex-start', p: 2, gap: 2, ".MuiCardHeader-title": { fontSize: 16 }, '.MuiCardHeader-action': { width: 1 } }} title={<span>Users List <Typography component='small' fontSize={10} color="text.secondary">(59)</Typography></span>}
                            action={
                                <Stack spacing={2}>
                                    <Box sx={{ flex: 1, '.MuiInputBase-root': { width: 1 } }}>
                                        <Search />
                                    </Box>
                                    <ToggleButtonGroup
                                        sx={{ button: { border: 0, py: .5, px: 1, borderRadius: '6px !important' }, border: 1, borderColor: 'divider', py: .5, px: 1, justifyContent: 'space-between' }}
                                        value={status}
                                        exclusive
                                        onChange={handleChange}

                                    >
                                        <ToggleButton value="all">All</ToggleButton>
                                        <ToggleButton value="active">Active</ToggleButton>
                                        <ToggleButton value="offline">Offline</ToggleButton>
                                        <ToggleButton value="pending">Pending</ToggleButton>
                                    </ToggleButtonGroup>
                                </Stack>
                            }
                        />
                        <CardContent sx={{ p: 0, pt: 5 }}>
                            {data.data.map((row, idx) => (
                                <GeneralUserMobileCard isLoading={false} key={idx} row={row} />
                            ))}

                        </CardContent>
                    </Card>
                )}
            </Stack>
        </>
    )
}

export default GeneralUsers