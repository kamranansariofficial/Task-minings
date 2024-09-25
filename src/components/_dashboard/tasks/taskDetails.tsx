'use client';
import React from 'react';
// mui
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  useTheme,
  Typography,
} from '@mui/material';
// icons
import { RxCross2 } from 'react-icons/rx';
import Label from '@/components/label';
import Icon from '@/utils/icon';
import TaskStepper from './stepper';

export default function TaskDetails({ ...props }) {
  const { id } = props;
  const theme = useTheme();
  return (
    <Box>
      <Box
        mb={2}
        sx={{
          display: 'flex',
          justifyContent: 'end',
        }}>
        <Button
          variant='contained'
          color='inherit'
          startIcon={<RxCross2 />}
          sx={{
            border: '1px solid' + theme.palette.divider,
            bgcolor: theme.palette.background.paper,
            color: theme.palette.text.secondary,
            fontWeight: 500,
          }}>
          Incomplete
        </Button>
      </Box>

      <Card sx={{ mb: 2 }}>
        <CardContent
          sx={{
            pl: 8,
          }}>
          <Grid
            container
            justifyContent='end'
            spacing={2}>
            <Grid
              item
              xs={6}
              md={4}>
              <Stack spacing={1}>
                <Typography
                  variant='subtitle1'
                  fontWeight={700}
                  color='text.primary'>
                  Task ID
                </Typography>
                <Typography
                  variant='subtitle2'
                  color='text.secondary'>
                  145844d884{' '}
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}>
              <Stack spacing={1}>
                <Typography
                  variant='subtitle1'
                  fontWeight={700}
                  color='text.primary'>
                  Category
                </Typography>
                <Box>
                  <Label
                    variant='ghost'
                    color='info'>
                    Like
                  </Label>
                </Box>
              </Stack>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}>
              <Stack spacing={1}>
                <Typography
                  variant='subtitle1'
                  fontWeight={700}
                  color='text.primary'>
                  Name
                </Typography>
                <Typography
                  variant='subtitle2'
                  color='text.secondary'>
                  Facebook Like
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={6}
              md={2}>
              <Stack spacing={1}>
                <Typography
                  variant='subtitle1'
                  fontWeight={700}
                  color='text.primary'>
                  Reward
                </Typography>
                <Typography
                  variant='subtitle2'
                  color='primary'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}>
                  <Icon name='bitcoin-cpu-1' />
                  5.00
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <TaskStepper />
    </Box>
  );
}
