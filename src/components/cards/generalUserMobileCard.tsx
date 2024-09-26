import { alpha, Stack, Typography } from '@mui/material'
import React from 'react'

function GeneralUserMobileCard({ ...props }) {
    const { row } = props;
    return (
        <Stack sx={{
            '&:hover': {
                bgcolor: theme => alpha(theme.palette.info.main, 0.04)
            }
        }} direction='row' borderBottom={1} borderColor='divider' alignItems='center' justifyContent='space-between' spacing={1} p={2}>
            <Stack>
                <Typography fontWeight={700} color='text.secondary' fontSize={12}>{row?.name}</Typography>
                <Typography fontSize={12} color='text.secondary'>
                    {row?.email}
                </Typography>
            </Stack>
            <Stack>
                <Typography color='text.secondary' fontSize={12}>{row?.phone}</Typography>
                <Typography fontSize={12} color='text.secondary'>
                    {row?.subscriptions || row?.role}
                </Typography>
            </Stack>
            <Stack>
                <Typography color='text.secondary' fontSize={12} fontWeight={600}>{row?.country}</Typography>
                <Typography fontSize={10} fontWeight={600} color={row.status === "Active" ? 'primary' : 'error'}>
                    {row?.status}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default GeneralUserMobileCard