import React from 'react';
// mui
import {
  alpha,
  Box,
  Chip,
  Fab,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Divider,
  Button,
} from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  timelineOppositeContentClasses,
  TimelineSeparator,
} from '@mui/lab';
// /icons

import { FaCheck } from 'react-icons/fa6';
import Icon from '@/utils/icon';
import { IoIosArrowDown } from 'react-icons/io';
import { MdArrowForwardIos } from 'react-icons/md';

export default function WithdrawalTimeline() {
  return (
    <Box
      sx={{
        maxWidth: 650,
        mb: 2,
      }}>
      <Timeline
        sx={{
          pl: 0,
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}>
        <TimelineItem
          sx={{
            minHeight: 114,
            '&::before': {
              display: 'none',
            },
          }}>
          <TimelineSeparator>
            <Fab
              variant='circular'
              color='primary'
              size='small'
              sx={{
                boxShadow: 'none',
                height: 32,
                minHeight: 32,
                width: 32,
                minWidth: 32,
              }}>
              <FaCheck size={16} />
            </Fab>
            <TimelineConnector
              sx={{
                bgcolor: 'primary.main',
                width: 6,
                borderRadius: 1,
                my: 1,
              }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <Stack spacing={2}>
              <Typography
                variant='h6'
                fontWeight={600}>
                Balance
              </Typography>
              <TextField
                size='small'
                value='₮ 3,583'
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Icon name='bitcoin-cpu-1' />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem
          sx={{
            minHeight: 114,
            '&::before': {
              display: 'none',
            },
          }}>
          <TimelineSeparator>
            <Fab
              variant='circular'
              color='primary'
              size='small'
              sx={{
                boxShadow: 'none',
                height: 32,
                minHeight: 32,
                width: 32,
                minWidth: 32,
              }}>
              <FaCheck size={16} />
            </Fab>
            <TimelineConnector
              sx={{
                bgcolor: 'primary.main',
                width: 6,
                borderRadius: 1,
                my: 1,
              }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <Stack
              spacing={3}
              mb={3}>
              <Typography
                variant='h6'
                fontWeight={600}>
                Withdraw To
              </Typography>
              <Stack
                gap={0.5}
                width={1}>
                <Typography
                  variant='overline'
                  color='text.primary'
                  htmlFor='address'
                  component={'label'}>
                  Address
                </Typography>
                <TextField
                  id='address'
                  size='small'
                  placeholder='Address'
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position='end'>
                          <Icon name='contact-book' />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Stack>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem
          sx={{
            minHeight: 114,
            '&::before': {
              display: 'none',
            },
          }}>
          <TimelineSeparator>
            <Fab
              variant='circular'
              color='primary'
              size='small'
              sx={{
                boxShadow: 'none',
                height: 32,
                minHeight: 32,
                width: 32,
                minWidth: 32,
              }}>
              3
            </Fab>
          </TimelineSeparator>
          <TimelineContent>
            <Stack spacing={2}>
              <Typography
                variant='h6'
                fontWeight={600}>
                Withdraw Amount
              </Typography>
              <TextField
                id='minimal'
                size='small'
                placeholder='Minimal 10'
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Typography
                          variant='subtitle1'
                          color='text.primary'
                          sx={{
                            span: {
                              color: 'primary.main',
                            },
                          }}>
                          TSD <span>MAX</span>
                        </Typography>
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <Stack
                direction='row'
                alignItems='center'
                justifyContent='space-between'>
                <Typography
                  variant='body2'
                  color='text.secondary'>
                  Available Withdraw
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 0, md: 1 },
                  }}>
                  0.00 USDT <IoIosArrowDown size={16} />
                </Typography>
              </Stack>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                alignItems={{ xs: 'start', md: 'center' }}
                spacing={2}
                justifyContent='space-between'>
                <Typography
                  variant='body2'
                  color='text.secondary'>
                  24h remaining limit
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'>
                  <Typography
                    component='span'
                    variant='subtitle2'
                    color='text.primary'>
                    18,000,000.0 USDT{' '}
                  </Typography>
                  / 18,000,000.0 USDT
                </Typography>
              </Stack>
              <Divider />
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                alignItems={{ xs: 'start', md: 'center' }}
                spacing={2}
                justifyContent='space-between'>
                <Stack spacing={0.5}>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.3,
                    }}>
                    Received Amount{' '}
                    <Icon name='arrow-data-transfer-horizontal' />
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    color='text.primary'>
                    0.00 USDT
                  </Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.3,
                    }}>
                    Network Fee 1 USDT <MdArrowForwardIos />
                  </Typography>
                </Stack>

                <Button
                  variant='contained'
                  color='primary'
                  startIcon={<Icon name='bitcoin-withdraw' />}>
                  Withdraw
                </Button>
              </Stack>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
