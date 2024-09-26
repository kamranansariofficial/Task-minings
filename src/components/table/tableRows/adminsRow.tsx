'use client'
import React from 'react';
// mui
import {
    TableRow,
    Skeleton,
    TableCell,
    Typography,
    Button,
    useTheme,
    Stack,
    Avatar,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Label from '@/components/label';
import avatar from '@public/static/db80168cf0d227f0cb2263540138e063.jpeg'
import { useRouter } from 'next/navigation';

export default function AdminsRow({ ...props }) {
    const { isLoading, row } = props;
    const router = useRouter()
    const theme = useTheme();
    return (
        <TableRow
            hover
            key={Math.random()}>

            <TableCell
                component='th'
                scope='row'
                sx={{
                    textTransform: 'capitalize',
                }}>
                {isLoading ? <Skeleton variant='text' /> :
                    <Stack direction='row' alignItems='center' spacing={1.5}>
                        <Avatar
                            alt="avatar"
                            src={avatar.src}

                        />
                        <Stack>
                            <Typography fontWeight={700} color='text.secondary' variant='body2'>{row?.name}</Typography>
                            <Typography variant='body2' color='text.secondary'>
                                {row?.email}
                            </Typography>

                        </Stack>
                    </Stack>
                }
            </TableCell>
            <TableCell>
                {isLoading ? (
                    <Skeleton variant='text' />
                ) : (
                    <Typography sx={{ textWrap: 'nowrap' }} variant='body2' fontWeight={600} color="text.secondary">{row.phone}</Typography>
                )}
            </TableCell>
            <TableCell>
                {isLoading ? (
                    <Skeleton variant='text' />
                ) : (
                    <Typography
                        variant='body2'
                        sx={{ textWrap: 'nowrap' }}
                        fontWeight={600}
                        color='text.secondary'>
                        {row.role}
                    </Typography>
                )}
            </TableCell>
            <TableCell
                sx={{
                    textTransform: 'capitalize',
                }}>
                {isLoading ? (
                    <Skeleton variant='text' />
                ) : (
                    <Label
                        variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                        color={
                            (row?.status === 'Active' && 'primary') ||

                            'error'
                        }>
                        <Stack direction='row' alignItems='center' spacing={.5}>
                            <FiberManualRecordIcon sx={{ width: 16, height: 16 }} /> <span>{row.status}</span>
                        </Stack>
                    </Label>
                )}
            </TableCell>
            <TableCell>
                {isLoading ? <Skeleton variant='text' /> : <Typography variant='body2' fontSize={12} fontWeight={600} color='text.secondary'>
                    {row?.country}
                </Typography>}
            </TableCell>
            <TableCell align='right'>
                <Button
                    onClick={() => router.push(`/admin/general-users/${row._id}`)}
                    sx={{ textWrap: 'nowrap' }}
                    variant='contained'
                    size='small'
                    color='primary'>
                    change role
                </Button>
            </TableCell>
        </TableRow>
    );
}
