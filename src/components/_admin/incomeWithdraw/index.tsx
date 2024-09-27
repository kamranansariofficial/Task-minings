'use client'
import Icon from '@/utils/icon'
import { Box, Button, Card, CardContent, CardHeader, IconButton, Stack, Typography, alpha, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Table from 'src/components/table/table';
import data from './data.json';
import TransactionsRow from '@/components/table/tableRows/adminTransactionRow';
import Search from '@/components/search';
import AdminTransactionMobileCard from '@/components/cards/adminTransactionMobileCard'
const TABLE_HEAD = [
    { id: 'id', label: 'Transtion ID', alignRight: false },
    { id: 'date', label: 'Date', alignRight: false, sort: true },
    { id: 'time', label: 'Time', alignRight: false },
    { id: 'email', label: 'Email', alignRight: false },
    { id: 'type', label: 'Type', alignRight: false },
    { id: 'amount', label: 'Amount', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
    { id: '', label: 'Action', alignRight: true },
];

function IncomeWithdraw() {
    const theme = useTheme();
    const IsMobile = useMediaQuery(theme.breakpoints.down('md'));
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
                <Card>
                    <CardHeader
                        sx={{ gap: { xs: 2, sm: 0 }, flexDirection: { xs: 'column-reverse', sm: 'row' }, alignItems: { xs: 'start', sm: 'center' }, p: 3, '.MuiCardHeader-action': { alignSelf: { xs: 'flex-start', sm: 'center' } } }}
                        title={<Stack>
                            <Typography variant='body2' color='text.secondary' fontWeight={700}>Total Income</Typography>
                            <Stack direction='row' alignItems='center' spacing={1}>
                                <Icon width={30} height={30} name="bitcoin-cpu-primary" />
                                <Typography color='primary' variant='h4'>13,583</Typography>
                            </Stack>

                        </Stack>}
                        action={<IconButton disableRipple sx={{ width: 43, height: 43, borderRadius: 3, bgcolor: theme => alpha(theme.palette.text.secondary, 0.3) }} >
                            <Icon name="bitcoin-cpu" />
                        </IconButton>}
                    />
                </Card>
                <Card>
                    <CardHeader
                        sx={{ gap: { xs: 2, sm: 0 }, flexDirection: { xs: 'column-reverse', sm: 'row' }, alignItems: { xs: 'start', sm: 'center' }, p: 3, '.MuiCardHeader-action': { alignSelf: { xs: 'flex-start', sm: 'center' } } }}
                        title={<Stack>
                            <Typography variant='body2' color='text.secondary' fontWeight={700}>Total Withdrawal</Typography>
                            <Stack direction='row' alignItems='center' spacing={1}>
                                <Icon width={30} height={30} name="bitcoin-cpu-primary" />
                                <Typography color='primary' variant='h4'>13,583</Typography>
                            </Stack>

                        </Stack>}
                        action={<IconButton disableRipple sx={{ width: 43, height: 43, borderRadius: 3, bgcolor: theme => alpha(theme.palette.text.secondary, 0.3) }} >
                            <Icon name="ic-save-money-dollar" />
                        </IconButton>}
                    />
                </Card>
                <Card>
                    <CardHeader
                        sx={{ gap: { xs: 2, sm: 0 }, flexDirection: { xs: 'column-reverse', sm: 'row' }, alignItems: { xs: 'start', sm: 'center' }, p: 3, '.MuiCardHeader-action': { alignSelf: { xs: 'flex-start', sm: 'center' } } }}
                        title={<Stack>
                            <Typography variant='body2' color='text.secondary' fontWeight={700}>Accumulated Income</Typography>
                            <Stack direction='row' alignItems='center' spacing={1}>
                                <Icon width={30} height={30} name="bitcoin-cpu-primary" />
                                <Typography color='primary' variant='h4'>13,583</Typography>
                            </Stack>

                        </Stack>}
                        action={<IconButton disableRipple sx={{ width: 43, height: 43, borderRadius: 3, bgcolor: theme => alpha(theme.palette.text.secondary, 0.3) }} >
                            <Icon name="bitcoin-cpu" />
                        </IconButton>}
                    />
                </Card>
            </Stack>
            <Stack mt={4}>
                {
                    !IsMobile ? (<Table
                        headData={TABLE_HEAD}
                        data={data}
                        isLoading={false}
                        isSearch
                        isFilter
                        heading='Recent Transactions'
                        row={TransactionsRow}
                    />) : (<Card>
                        <CardHeader
                            sx={{ px: 2 }}
                            title={
                                <Stack direction='row' alignItems='center' spacing={1}>
                                    <Box sx={{ flex: 1, '.MuiInputBase-root': { width: 1 } }}>
                                        <Search />
                                    </Box>
                                    <Button variant='outlined' color="inherit" startIcon={<Icon name="ic-filter-horizontal" />}>All</Button>
                                </Stack>
                            }
                        />
                        <CardContent sx={{ p: 0, mt: 4 }}>
                            {data.data.map((row, idx) => (
                                <AdminTransactionMobileCard isLoading={false} key={idx} row={row} />
                            ))}

                        </CardContent>
                    </Card>)
                }

            </Stack>
        </>
    )
}

export default IncomeWithdraw