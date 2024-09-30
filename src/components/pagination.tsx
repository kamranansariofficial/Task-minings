import React, { useCallback } from 'react';
// mui
import Pagination from '@mui/material/Pagination';
// next
import { useSearchParams, usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';

import PropTypes from 'prop-types';
import {
  MenuItem,
  Select,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

PaginationRounded.propTypes = {
  data: PropTypes.shape({
    count: PropTypes.number,
  }),
};

export default function PaginationRounded({ ...props }) {
  const { data } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const [state, setstate] = React.useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const createQueryString = useCallback(
    (name: string, value: any) => {
      const params = new URLSearchParams(searchParams as any);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (event: any, value: any) => {
    setstate(value);
    router.push(`${pathname}?${createQueryString('page', value)}`);
  };
  React.useEffect(() => {
    if (page) {
      setstate(Number(page));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <>
      {isMobile ? (
        <Pagination
          count={Boolean(data?.count) ? data?.count : 1}
          page={state}
          onChange={handleChange}
          shape='rounded'
          sx={{
            mx: 'auto',
            mt: 1,
            '.MuiPagination-ul': {
              justifyContent: 'center',
            },
          }}
        />
      ) : (
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='center'
          spacing={3}>
          <Typography
            variant='body1'
            color='text.secondary'>
            Total 85 items
          </Typography>
          <Pagination
            count={Boolean(data?.count) ? data?.count : 1}
            page={state}
            onChange={handleChange}
            shape='rounded'
            sx={{
              mx: 'auto',
              mb: 3,
              '.MuiPagination-ul': {
                justifyContent: 'center',
              },
            }}
          />
          <Select
            id={'select'}
            size='small'
            sx={{
              color: 'text.secondary',
            }}
            value={10}
            onChange={(e) => e.target.value}>
            {[10, 20, 30, 30].map((v) => (
              <MenuItem
                value={v}
                key={v}>
                {v} / page
              </MenuItem>
            ))}
          </Select>
        </Stack>
      )}
    </>
  );
}
