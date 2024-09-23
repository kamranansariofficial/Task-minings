'use client'
import { Box, Button, Card, CardContent, CardHeader, Grid, Grid2, Menu, MenuItem, Popover, Stack } from '@mui/material'
import React from 'react'
import DashboardCard from '@/components/cards/dashboardCard'
import Icon from '@/utils/icon'

function AdminDashboard() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [selectedOption, setSelectedOption] = React.useState('Month');
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <Stack spacing={2}>
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
                    <Card>
                        <CardHeader

                            action={
                                <>
                                    <Box component="button"
                                        sx={{
                                            border: 1,
                                            borderColor: 'divider',
                                            background: 'none',
                                            borderRadius: 2,
                                            lineHeight: 1,
                                            color: 'text.secondary',
                                            p: (theme) => theme.spacing(1.12, 1),
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            cursor: 'pointer',
                                            minWidth: 98

                                        }}
                                        aria-describedby={id} onClick={handleClick}>
                                        {selectedOption}
                                        <Icon name='ic-arrow-down' />
                                    </Box>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={() => {
                                            setSelectedOption('Week');
                                            handleClose()
                                        }}>Week</MenuItem>
                                        <MenuItem onClick={() => {
                                            setSelectedOption('Month');
                                            handleClose()
                                        }}>Month</MenuItem>
                                        <MenuItem onClick={() => {
                                            setSelectedOption('Year');
                                            handleClose()
                                        }}>Year</MenuItem>

                                    </Menu>
                                </>
                            }
                            title="Performance"

                        />
                        <CardContent>
                            fasd
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={5}>

                </Grid>
            </Grid>

        </Stack>
    )
}

export default AdminDashboard