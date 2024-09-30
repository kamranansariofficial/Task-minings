import { merge } from 'lodash';
import PropTypes from 'prop-types';
// chart
import ReactApexChart from 'react-apexcharts';
// mui
import { Card, CardHeader, Box, Skeleton, useTheme } from '@mui/material';
// components
import BaseOptionChart from './BaseOptionChart';
import { TbCurrencyTugrik } from 'react-icons/tb';
import ChartStyled from './chartStyle';

export default function Income({ ...props }) {
  const { data, isLoading } = props;
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(theme), {
    stroke: {
      show: true,
      width: 1,
      curve: 'straight',
    },
    xaxis: {
      categories: [
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
      ],
    },
    markers: {
      customHTML: () => {
        return (document.createElement(
          'div'
        ).innerHTML = `<div class="apexcharts-marker custom-marker"><span></span></div>`);
      },
    },
    tooltip: {
      theme: 'light',
      custom: function ({ ...props }) {
        const { series, seriesIndex, dataPointIndex } = props;
        return `<div style="background: #ffffff;color:#999999;font-weight:600;padding: 8px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); text-align: center;">
            <strong style="color:#000;display:flex;">
           <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M7 6h10"></path><path d="M12 6v13"></path><path d="M8 17l8 -3"></path><path d="M16 10l-8 3"></path></svg>
            ${series[seriesIndex][dataPointIndex]}</strong>
            ${new Date().toLocaleDateString('en-IN')}
          </div>`;
      },
    },
    yaxis: {
      opposite: false,
      labels: {
        formatter: function (val: any) {
          return val.toFixed(0);
        },
      },
    },
  });

  return (
    <Card sx={{ pb: 1.5 }}>
      <CardHeader title={'Earning Statistics'} />

      {isLoading ? (
        <Box mx={3}>
          <Skeleton
            variant='rectangular'
            width='100%'
            height={219}
            sx={{ borderRadius: 2, mt: 3 }}
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
        </Box>
      ) : (
        <Box
          sx={{ mt: 3, mx: 3 }}
          dir='ltr'>
          <ChartStyled>
            <ReactApexChart
              type='area'
              series={[
                {
                  name: 'Income',
                  data: data, // Assuming this is income data
                },
              ]}
              options={chartOptions as any}
              height={260}
            />
          </ChartStyled>
        </Box>
      )}
    </Card>
  );
}
Income.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
