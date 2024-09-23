import { merge } from 'lodash';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// mui
import {
  Card,
  CardHeader,
  Box,
  Tabs,
  Tab,
  Skeleton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
// components
import BaseOptionChart from './BaseOptionChart';
import { fCurrency } from '@/utils/formatNumber';

// Define the types for the data props
interface IncomeChartProps {
  income: {
    week: number[];
    month: number[];
    year: number[];
  };
  commission: {
    week: number[];
    month: number[];
    year: number[];
  };
  isLoading: boolean;
}

export default function IncomeChart({
  income,
  commission,
  isLoading,
}: IncomeChartProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [seriesData, setSeriesData] = useState<'week' | 'month' | 'year'>(
    'week'
  );

  const pastWeek = [...Array(7)].map((days) =>
    new Date(Date.now() - 86400000 * days).toLocaleString('en-us', {
      weekday: 'short',
    })
  );

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: 'week' | 'month' | 'year'
  ) => {
    setSeriesData(newValue);
  };

  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const chartOptions = merge(BaseOptionChart(theme), {
    legend: { position: 'top', horizontalAlign: 'right' },
    xaxis: {
      categories:
        seriesData === 'week'
          ? pastWeek.reverse()
          : seriesData === 'year'
          ? month
          : [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
            ],
    },
    yaxis: [
      {
        labels: {
          formatter: function (val: number) {
            return fCurrency(val);
          },
        },
      },
    ],
  });

  return (
    <Card>
      <CardHeader
        title={'Income Report'}
        action={
          <Tabs
            value={seriesData}
            onChange={handleChange}
            textColor='primary'
            indicatorColor='primary'
            aria-label='secondary tabs example'
            sx={{
              '& .MuiButtonBase-root:not(:last-of-type)': {
                marginRight: '1rem',
              },
            }}>
            <Tab
              value='week'
              label={'Week'}
            />
            <Tab
              value='month'
              label={'Month'}
            />
            <Tab
              value='year'
              label={'Year'}
            />
          </Tabs>
        }
        sx={{ flexWrap: 'wrap' }}
      />
      <Box sx={{ mt: 3, mx: 3 }}>
        {isLoading ? (
          <>
            <Skeleton
              variant='rectangular'
              width='100%'
              height={isMobile ? 260 : 360}
              sx={{ borderRadius: 2 }}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 1,
                mb: 3,
              }}>
              <Skeleton
                variant='text'
                sx={{ width: 40 }}
              />
              <Skeleton
                variant='text'
                sx={{ width: 40 }}
              />
              <Skeleton
                variant='text'
                sx={{ width: 40 }}
              />
              <Skeleton
                variant='text'
                sx={{ width: 40 }}
              />
              <Skeleton
                variant='text'
                sx={{ width: 40 }}
              />
              <Skeleton
                variant='text'
                sx={{ width: 40 }}
              />
            </Box>
          </>
        ) : (
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              '.apexcharts-canvas': {
                width: '100% !important',
                overflow: 'hidden',
                position: 'relative',
              },
            }}>
            <ReactApexChart
              type='bar'
              stack
              series={[
                {
                  name: 'Income',
                  data: income[seriesData],
                },
                {
                  name: 'Commission',
                  data: commission[seriesData],
                },
              ].slice(0, 1)}
              options={chartOptions as any}
              height={isMobile ? 260 : 400}
            />
          </Box>
        )}
      </Box>
    </Card>
  );
}
