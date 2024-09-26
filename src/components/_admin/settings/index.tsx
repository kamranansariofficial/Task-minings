'use client'
import { Card, CardContent, InputLabel, Stack, TextField, Typography, InputAdornment, IconButton, Switch, FormControl, Select, MenuItem, Button } from '@mui/material'
import { FormikProvider, useFormik, Form } from 'formik'
import React from 'react'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
function Settings() {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            current_password: '',
            new_password: '',
            confirm_new_password: '',
            two_factor_authentication: false,
            language: 'english',
            enable_notification: false

        },
        onSubmit(value) {
            console.log(value)

        }
    });
    // show or hide password for each password input
    const [showPassword, setShowPassword] = React.useState<any>({
        current_password: false,
        new_password: false,
        confirm_new_password: false,
    });
    const handleClickShowPassword = (field: string) => {
        setShowPassword({ ...showPassword, [field]: !showPassword[field] });
    };


    const { getFieldProps, handleSubmit } = formik
    return (
        <>
            <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
                    <Card>
                        <CardContent sx={{ p: { xs: 2, sm: 3 }, pt: { xs: 3 } }}>
                            <Stack sx={{
                                display: 'grid',
                                gridTemplateColumns: { md: 'repeat(2, minmax(0, 1fr))', xs: 'repeat(1, minmax(0, 1fr))' },
                            }}>

                                <Stack spacing={3}>
                                    <Typography variant='h5'>Password Security</Typography>
                                    <Stack width={1}>
                                        <InputLabel sx={{ color: 'text.primary', fontSize: 16, fontWeight: 700 }} shrink>
                                            Current password
                                        </InputLabel>
                                        <TextField
                                            type={showPassword.current_password ? 'text' : 'password'}
                                            slotProps={{
                                                input: {
                                                    endAdornment: <InputAdornment position='end'>
                                                        <IconButton
                                                            onClick={() => handleClickShowPassword('current_password')}
                                                        >
                                                            {showPassword.current_password ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            }}
                                            fullWidth {...getFieldProps("current_password")} size="small" />
                                    </Stack>
                                    <Stack width={1}>
                                        <InputLabel sx={{ color: 'text.primary', fontSize: 16, fontWeight: 700 }} shrink>
                                            New password
                                        </InputLabel>
                                        <TextField
                                            slotProps={{
                                                input: {
                                                    endAdornment: <InputAdornment position='end'>
                                                        <IconButton
                                                            onClick={() => handleClickShowPassword('new_password')}
                                                        >
                                                            {showPassword.new_password ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            }}
                                            type={showPassword.new_password ? 'text' : 'password'} fullWidth {...getFieldProps("new_password")} size="small" />
                                    </Stack>
                                    <Stack width={1}>
                                        <InputLabel sx={{ color: 'text.primary', fontSize: 16, fontWeight: 700 }} shrink>
                                            Confirm new password
                                        </InputLabel>
                                        <TextField

                                            slotProps={{
                                                input: {
                                                    endAdornment: <InputAdornment position='end'>
                                                        <IconButton
                                                            onClick={() => handleClickShowPassword('confirm_new_password')}
                                                        >
                                                            {showPassword.confirm_new_password ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            }}
                                            type={showPassword.confirm_new_password ? 'text' : 'password'}
                                            fullWidth {...getFieldProps("confirm_new_password")} size="small" />
                                    </Stack>
                                    <Stack direction='row' alignItems='center' justifyContent='space-between' >
                                        <Typography color='text.secondary' sx={{ fontSize: { xs: 14, sm: 16 } }}>Enable Two-factor authentication</Typography>
                                        <Switch color="primary" {...getFieldProps('two_factor_authentication')} />
                                    </Stack>
                                </Stack>

                            </Stack>
                        </CardContent>
                    </Card>
                    <Card sx={{ mt: 3 }}>
                        <CardContent sx={{ p: { xs: 2, sm: 3 }, pt: { xs: 3 } }}>
                            <Stack sx={{
                                display: 'grid',
                                gridTemplateColumns: { md: 'repeat(2, minmax(0, 1fr))', xs: 'repeat(1, minmax(0, 1fr))' },
                            }}>
                                <Stack spacing={3}>
                                    <Typography variant='h5'>General</Typography>
                                    <Stack width={1}>
                                        <InputLabel sx={{ color: 'text.primary', fontSize: 16, fontWeight: 700 }} shrink>
                                            Language
                                        </InputLabel>
                                        <FormControl
                                            fullWidth
                                        >

                                            <Select

                                                labelId={'select-1'}
                                                id={'select-1'}
                                                size="small"
                                                {...getFieldProps("language")}
                                            >


                                                <MenuItem
                                                    value={'english'}
                                                >
                                                    English
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                    <Stack width={1}>
                                        <InputLabel sx={{ color: 'text.primary', fontSize: 16, fontWeight: 700 }} shrink>
                                            Notification
                                        </InputLabel>
                                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                                            <Typography color='text.secondary' fontSize={{ xs: 14, sm: 16 }}>Get notification for regular updates</Typography>
                                            <Switch color="primary" {...getFieldProps('enable_notification')} />

                                        </Stack>

                                    </Stack>
                                    <Stack width={1}>
                                        <InputLabel sx={{ color: 'text.primary', fontSize: 16, fontWeight: 700 }} shrink>
                                            Mode
                                        </InputLabel>
                                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                                            <Typography color='text.secondary' fontSize={{ xs: 14, sm: 16 }}>Switch to Dark Mode</Typography>
                                            <Switch color="primary" {...getFieldProps('enable_notification')} />

                                        </Stack>

                                    </Stack>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                    <Stack direction='row' justifyContent='flex-end' spacing={2} mt={3}>
                        <Button sx={{ color: 'text.secondary', width: { xs: 1, sm: 'auto' } }} startIcon={<CancelOutlinedIcon />} variant='contained' color='inherit'>
                            Cancel
                        </Button>
                        <Button type='submit' sx={{ width: { xs: 1, sm: 'auto' } }} startIcon={<SaveOutlinedIcon />} variant='contained'>
                            Update
                        </Button>
                    </Stack>
                </Form>
            </FormikProvider>
        </>
    )
}

export default Settings