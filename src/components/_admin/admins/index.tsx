'use client'
import DashboardCard from '@/components/cards/dashboardCard'
import Table from '@/components/table/table'
import Icon from '@/utils/icon'
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Card, CardContent, CardHeader, FormControl, Stack, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery, useTheme } from '@mui/material'
import data from './data.json';
import React from 'react'
import AdminsRow from '@/components/table/tableRows/adminsRow'
import GeneralUserMobileCard from '@/components/cards/generalUserMobileCard'
import Search from '@/components/search'
const TABLE_HEAD = [

    { id: 'name', label: 'Name', alignRight: false },
    { id: 'phone', label: 'Phone', alignRight: false },
    { id: 'role', label: 'Role', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
    { id: 'country', label: 'Country', alignRight: false },
    { id: 'action', label: 'Action', alignRight: true },
];
function Admins() {
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

            <Stack>
                {!isMobile ? (
                    <Table
                        headData={TABLE_HEAD}
                        data={data}
                        isLoading={false}
                        heading={'Admins List'}
                        isSearch
                        isFilter
                        row={AdminsRow}
                    />
                ) : (
                    <Card>
                        <CardHeader sx={{ ".MuiCardHeader-content": { width: 1 }, flexDirection: 'column', alignItems: 'flex-start', p: 2, gap: 2, ".MuiCardHeader-title": { fontSize: 16, width: 1 }, '.MuiCardHeader-action': { width: 1 } }} title={
                            <Stack width={1} direction='row' alignItems='center' justifyContent='space-between'>
                                <Typography fontWeight={700}>Admins List</Typography>
                                <Button size='small' variant='outlined' color="inherit" startIcon={<AddIcon />}>
                                    Add Admin
                                </Button>

                            </Stack>
                        }
                            action={
                                <Stack spacing={2} direction='row' justifyContent='space-between'>
                                    <Box sx={{ flex: 1, '.MuiInputBase-root': { width: 1 } }}>
                                        <Search />
                                    </Box>
                                    <Button variant='outlined' color="inherit" startIcon={<Icon name="ic-filter-horizontal" />}>
                                        All
                                    </Button>
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

export default Admins