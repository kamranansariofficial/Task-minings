'use client'
import Icon from '@/utils/icon'
import { Button, Card, alpha, CardContent, CardHeader, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, IconButton, InputLabel, Stack, TextField, Typography, Box, CardActions, useTheme, useMediaQuery, } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Label from '@/components/label';
import { Timeline, TimelineConnector, TimelineContent, TimelineItem, timelineOppositeContentClasses, TimelineSeparator } from '@mui/lab';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Img from '@public/static/c0a179321e3c63ff8e031c2e06e1f5af.png'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningIcon from '@mui/icons-material/Warning';
function TaskDetails() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
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


                />
                <Divider sx={{ maxWidth: '95%', margin: 'auto', mt: 1 }} />
                <CardContent sx={{ padding: { xs: 1, md: 3 }, pt: { xs: 3 } }}>
                    <Stack>
                        <Stack spacing={1}>
                            <Typography color="text.secondary" variant='h6'>
                                Details
                            </Typography>
                            <Stack
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 200px))',
                                    gap: 3,

                                }}
                            >
                                <Stack direction='row' spacing={2} alignItems='center'>
                                    <IconButton sx={{
                                        borderRadius: 2,
                                        bgcolor: theme => alpha(theme.palette.secondary.main, 0.06)
                                    }}>
                                        <Icon name="ic-callander" />
                                    </IconButton>
                                    <Stack spacing={.2}>
                                        <Typography color="text.secondary" fontWeight={600} variant='body2'>
                                            Submission Date
                                        </Typography>
                                        <Typography fontWeight={600} color="text.primary" >
                                            12/12/2023
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction='row' spacing={2} alignItems='center'>
                                    <IconButton sx={{
                                        borderRadius: 2,
                                        bgcolor: theme => alpha(theme.palette.info.main, 0.1)
                                    }}
                                    >
                                        <Icon name="ic-add-to-list" />
                                    </IconButton>
                                    <Stack spacing={.2}>
                                        <Typography color="text.secondary" fontWeight={600} variant='body2'>
                                            Category
                                        </Typography>
                                        <Typography fontWeight={600} color="text.primary" >
                                            Like
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction='row' spacing={2} alignItems='center'>
                                    <IconButton sx={{
                                        borderRadius: 2,
                                        bgcolor: theme => alpha(theme.palette.secondary.main, 0.1)
                                    }}>
                                        <Icon name="ic-award" />
                                    </IconButton>
                                    <Stack spacing={.2}>
                                        <Typography color="text.secondary" fontWeight={600} variant='body2'>
                                            Rewards
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            color='primary'
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1,
                                            }}>
                                            <Icon name="usdt" /> 5.00
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Timeline
                            sx={{
                                mt: 4,
                                pl: 0,
                                [`& .${timelineOppositeContentClasses.root}`]: {
                                    flex: 0.2,

                                },
                            }}
                        >
                            {['Join Telegram', "Like Post", 'Submitted'].map((text, idx, array) => (
                                <TimelineItem
                                    key={idx}
                                    sx={{
                                        minHeight: 114,
                                        '&::before': {
                                            display: 'none'
                                        }
                                    }}>
                                    <TimelineSeparator>
                                        <CheckCircleIcon color='primary' />
                                        {idx < array.length - 1 &&
                                            <TimelineConnector
                                                sx={{ bgcolor: 'primary.main', width: 6, borderRadius: 1 }}
                                            />
                                        }
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ mt: -2 }}>
                                        <Stack spacing={-0.3}>
                                            <Typography textTransform='uppercase' color="text.secondary" fontSize={12}>
                                                Step {idx + 1}
                                            </Typography>
                                            <Stack direction='row' alignItems='center' spacing={1}>
                                                <Typography fontWeight={600}>{text}</Typography>
                                                <Chip size='small' color='primary' sx={{ bgcolor: theme => alpha(theme.palette.primary.main, 0.1) }} label="Complete" variant="outlined" />
                                            </Stack>
                                        </Stack>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}

                        </Timeline>
                        <Box component='img' width={200} src={Img.src} alt="dfa" />
                    </Stack>

                </CardContent>
                <CardActions sx={{ p: 3 }}>
                    <Button onClick={handleClickOpen} fullWidth={isMobile} startIcon={<CancelOutlinedIcon />} color='error' variant='contained'>
                        Reject
                    </Button>
                    <Button fullWidth={isMobile} startIcon={<CheckCircleOutlineIcon />} variant='contained'>
                        Accept
                    </Button>
                </CardActions>
            </Card >
            <Dialog
                open={open}

                onClose={handleClose}

                PaperProps={{
                    sx: {
                        borderRadius: 4,
                        maxWidth: 350
                    }
                }}

            >
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
                <DialogContent sx={{ p: { xs: 2, md: 4 } }}>
                    <Stack alignItems='center' width={1} spacing={2}>
                        <IconButton sx={{ bgcolor: theme => alpha(theme.palette.error.main, 0.1) }} color='error'>
                            <WarningIcon />
                        </IconButton>
                        <Typography color='text.primary' variant='h4' textAlign='center'>
                            Reject!
                        </Typography>
                        <Typography color='text.secondary' textAlign='center'>
                            Are you sure you want to reject this task permanently?
                        </Typography>
                    </Stack>
                </DialogContent>
                <DialogActions sx={{ pb: { xs: 2, md: 4 }, px: { xs: 2, md: 4 } }}>
                    <Button fullWidth onClick={handleClose} sx={{ color: 'text.secondary' }} variant='contained' color='inherit'>
                        No, Cancel
                    </Button>
                    <Button fullWidth variant='contained' color="error" onClick={handleClose}>
                        Yes, Reject
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default TaskDetails