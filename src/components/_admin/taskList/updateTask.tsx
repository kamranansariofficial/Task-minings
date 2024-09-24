'use client'
import Icon from '@/utils/icon'
import { Button, Card, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField, Typography, } from '@mui/material'
import React from 'react'
import { useFormik, Form, FormikProvider } from 'formik'
import { DatePicker } from "@mui/x-date-pickers";
import CloseIcon from '@mui/icons-material/Close';
import Label from '@/components/label'
function UpdateTask() {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            task_name: '',
            category: 'like',
            submission_date: null,
            rewards: '',
            status: 'approved',
            description: ""
        },
        onSubmit: (value) => {

        },
    });
    const handleCopy = (value: string) => {
        navigator.clipboard.writeText(value)
            .then(() => {
                alert('Copied to clipboard successfully!');
            })
            .catch((error) => {
                console.error('Failed to copy: ', error);
            });
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;
    return (
        <>
            <Card>
                <CardHeader
                    sx={{
                        padding: { xs: 1, md: 3 },
                        pb: { md: 0 },
                        '.MuiCardHeader-action': {
                            margin: 0,
                            alignSelf: 'center',


                        }
                    }}
                    subheader={
                        <Stack spacing={1} alignItems='flex-start'>
                            <Button startIcon={<Icon name="ic-arrow-left" />} color='inherit'>
                                Back
                            </Button>
                            <Stack spacing={1}>
                                <Stack direction='row' alignItems="center" spacing={2}>
                                    <Typography color="text.primary" variant='h5'>
                                        Facebook Like
                                    </Typography>
                                    <Label sx={{ height: 30 }} color='primary'>
                                        Approved
                                    </Label>
                                </Stack>
                                <Stack direction='row' alignItems='center' spacing={1}>
                                    <Typography fontWeight={600} color="text.secondary" variant='body2'>
                                        ID:12344566
                                    </Typography>
                                    <IconButton onClick={() => handleCopy('1234566')}>
                                        <Icon name="ic-file-copy" />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Stack>
                    }
                    action={
                        <Button onClick={handleClickOpen} startIcon={<Icon name="ic-add" />} variant='contained'>
                            Add Category
                        </Button>
                    }

                />
                <Divider sx={{ maxWidth: '95%', margin: 'auto', mt: 1 }} />
                <CardContent sx={{ padding: { xs: 1, md: 3 }, pt: { xs: 3 } }}>
                    <FormikProvider value={formik}>
                        <Stack component={Form} spacing={3} onSubmit={handleSubmit}>
                            <Stack direction='row' spacing={2}>
                                <Stack width={1}>
                                    <InputLabel sx={{ color: 'text.primary', fontSize: 14, fontWeight: 700 }} shrink>
                                        Task Name
                                    </InputLabel>
                                    <TextField fullWidth {...getFieldProps("task_name")} size="small" />
                                </Stack>
                                <Stack width={1}>
                                    <InputLabel sx={{ color: 'text.primary', fontSize: 14, fontWeight: 700 }} shrink>
                                        Category
                                    </InputLabel>
                                    <FormControl
                                        fullWidth
                                    >

                                        <Select

                                            labelId={'select-1'}
                                            id={'select-1'}
                                            size="small"
                                            {...getFieldProps("category")}
                                        >


                                            <MenuItem
                                                value={'like'}
                                            >
                                                Like
                                            </MenuItem>

                                        </Select>
                                    </FormControl>
                                </Stack>
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <Stack width={1}>
                                    <InputLabel sx={{ color: 'text.primary', fontSize: 14, fontWeight: 700 }} shrink>
                                        Status
                                    </InputLabel>
                                    <FormControl
                                        fullWidth
                                    >

                                        <Select

                                            labelId={'select-1'}
                                            id={'select-1'}
                                            size="small"
                                            {...getFieldProps("status")}
                                        >


                                            <MenuItem
                                                value={'approved'}
                                            >
                                                Approved
                                            </MenuItem>

                                        </Select>
                                    </FormControl>
                                </Stack>
                                <Stack width={1}>
                                    <InputLabel sx={{ color: 'text.primary', fontSize: 14, fontWeight: 700 }} shrink>
                                        Submission Date
                                    </InputLabel>
                                    <DatePicker
                                        slotProps={{
                                            textField: {
                                                size: 'small',
                                                fullWidth: true
                                            }
                                        }}
                                        value={values.submission_date}
                                        onChange={(value) => {
                                            formik.setFieldValue("submission_date", value);
                                        }}
                                        format="dd-MM-yyyy"

                                    />
                                </Stack>
                            </Stack>
                            <Stack width={1}>
                                <InputLabel sx={{ color: 'text.primary', fontSize: 14, fontWeight: 700 }} shrink>
                                    Rewards
                                </InputLabel>
                                <TextField
                                    slotProps={{
                                        input: {
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    <Icon name='ic-keyboard' />
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                    fullWidth {...getFieldProps("rewards")} size="small" />
                            </Stack>
                            <Stack width={1}>
                                <InputLabel sx={{ color: 'text.primary', fontSize: 14, fontWeight: 700 }} shrink>
                                    Description
                                </InputLabel>
                                <TextField
                                    placeholder='Write task description here...'
                                    multiline
                                    rows={4}
                                    slotProps={{
                                        input: {
                                            endAdornment: (
                                                <InputAdornment sx={{ alignSelf: 'flex-end' }} position="start">
                                                    <Icon name='circle-arrow-expand-01' />
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                    fullWidth {...getFieldProps("description")} size="small" />
                            </Stack>
                            <Stack direction='row' justifyContent='flex-end' spacing={2}>
                                <Button sx={{ color: 'text.secondary' }} startIcon={<Icon name="ic-cancel" />} variant='contained' color='inherit'>
                                    Cancel
                                </Button>
                                <Button startIcon={<Icon name="ic-task-01" />} type='submit' variant='contained'>
                                    Update
                                </Button>
                            </Stack>
                        </Stack>
                    </FormikProvider>
                </CardContent>
            </Card>
            <Dialog
                open={open}
                fullWidth
                onClose={handleClose}
                maxWidth='sm'
                PaperProps={{
                    sx: {
                        borderRadius: 4
                    }
                }}

            >
                <DialogTitle component='div' sx={{ p: { xs: 2, md: 4 }, position: 'relative' }} id="alert-dialog-title">
                    Add Category
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={(theme) => ({
                            position: 'absolute',
                            right: 8,
                            top: { md: 24, xs: 6 },
                            color: theme.palette.grey[500],
                        })}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <Divider sx={{ width: 1, maxWidth: { md: '90%', xs: '94%' }, margin: 'auto' }} />
                <DialogContent sx={{ p: { xs: 2, md: 4 } }}>
                    <Stack spacing={3}>
                        <Stack width={1}>
                            <InputLabel sx={{ color: 'text.primary', fontSize: 14, fontWeight: 700 }} shrink>
                                Category Name
                            </InputLabel>
                            <TextField
                                size="small"
                                placeholder='Enter category name'

                                fullWidth />
                        </Stack>
                        <Stack width={1}>
                            <InputLabel sx={{ color: 'text.primary', fontSize: 14, fontWeight: 700 }} shrink>
                                Category Description
                            </InputLabel>
                            <TextField
                                placeholder='Write category description here...'
                                multiline
                                rows={4}
                                fullWidth />
                        </Stack>
                    </Stack>
                </DialogContent>
                <DialogActions sx={{ pb: { xs: 2, md: 4 }, px: { xs: 2, md: 4 } }}>
                    <Button onClick={handleClose} sx={{ color: 'text.secondary' }} startIcon={<Icon name="ic-cancel" />} variant='contained' color='inherit'>
                        Cancel
                    </Button>
                    <Button variant='contained' startIcon={<Icon name="ic-save" />} onClick={handleClose}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default UpdateTask