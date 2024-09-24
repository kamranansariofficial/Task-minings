'use client'
import { Box, Card, CardContent, CardHeader, Divider, FormControl, MenuItem, Select, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'

import Icon from '@/utils/icon'
import Table from 'src/components/table/table';
import TaskListRow from '@/components/table/tableRows/taskListAdmin';
import { tableData } from '../data';
import { ActionMenu } from '@/components/actionMenu'
import AdminTaskListMobileCard from '@/components/cards/adminTaskListMobileCard';
import Search from '@/components/search'
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
        icon: "ic-arrow-out"
    },
    {
        label: 'Open Project',
        action: 'OPEN-PROJECT',
        icon: "ic-arrow-out"
    },
    {
        label: 'Edit Task',
        action: 'EDIT-TASK',
        icon: "ic-pencil"
    },
    {
        label: 'Delete Task',
        action: 'DELETE-TASK',
        icon: "ic-trash-error"
    },

]

function TaskList() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

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
                :
                null,
        );
    };

    const handleClose = () => {
        setContextMenu(null);
    };
    const handleTableEvent = ({ action, event, row }: { action: string, event?: any, row: any }) => {
        switch (action) {
            case "OPEN-POPOVER":
                handleContextMenu(event);
                break;
        }
    }
    const handleMenuEvent = (action: string) => {
        switch (action) {
            case "VIEW-DETAILS":
                console.log(action)
                break;
            case "OPEN-PROJECT":
                break;
            case "EDIT-TASK":
                break;
            case "DELETE-TASK":
                break;
        }
    }
    return (
        <>
            {!isMobile ? (
                <Table
                    headData={TABLE_HEAD}
                    data={tableData}
                    isLoading={false}
                    heading={'Tasks List'}
                    isSearch
                    isFilter
                    {...{ handleTableEvent }}
                    row={TaskListRow}
                />
            ) : (
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
                        {tableData.data.map((row, idx) => (
                            <AdminTaskListMobileCard isLoading={false} key={idx} row={row} />
                        ))}

                    </CardContent>
                </Card>
            )
            }

            <ActionMenu {...{ handleClose, contextMenu, paperSx: { ul: { p: .3, li: { borderRadius: 1 } } } }}>
                {popoverMenu.map((item, idx) => (
                    <div key={idx}>
                        {item.label === "Delete Task" && <Divider sx={{ borderStyle: 'dashed', mx: -0.3, my: 1 }} />}
                        <MenuItem onClick={() => {
                            handleMenuEvent(item.action);
                            handleClose();
                        }}>
                            <Stack direction='row' alignItems='center' spacing={1}>
                                <Icon name={item.icon} />
                                <Typography fontWeight={500} color={item.label === "Delete Task" ? "error" : 'text.primary'} variant='body2'>{item.label}</Typography>
                            </Stack>
                        </MenuItem>
                    </div>
                ))}

            </ActionMenu>
        </ >
    )
}

export default TaskList