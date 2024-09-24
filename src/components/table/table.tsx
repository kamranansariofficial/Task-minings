import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next-nprogress-bar';
import { useSearchParams, usePathname } from 'next/navigation';
import {
  Divider,
  Card,
  Table,
  TableBody,
  TableContainer,
  Stack,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  CardContent,
} from '@mui/material';
import Pagination from '@/components/pagination';
import TableHead from './tableHead';
import { PiSlidersHorizontalLight } from 'react-icons/pi';

import Search from '../search';

// Define interfaces for your props
interface FilterItem {
  name: string;
  param: string;
  data: { slug: string; name: string; title?: string }[];
}

interface CustomTableProps {
  type?: string;
  headData: any[];
  data: {
    data: any[];
    count?: any;
    allData?: any[];
  };
  isLoading: boolean;
  mobileRow?: React.ComponentType<any>;
  row: React.ComponentType<any>;
  handleClickOpenAdd?: () => void;
  isbtnText?: string;
  isCSV?: boolean;
  heading?: string;
  isSearch?: boolean;
  filters?: FilterItem[];
  [key: string]: any;
  isFilter?: any;
}
const CustomTable: React.FC<CustomTableProps> = (props) => {
  const {
    type,
    headData,
    data,
    isLoading,
    mobileRow,
    row,
    handleClickOpenAdd,
    isbtnText,
    isCSV,
    heading,
    isSearch,
    filters,
    isFilter,
    ...rest
  } = props;

  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [state, setState] = useState<Record<string, string>>({});
  const queryString = searchParams.toString();

  const handleChange = (param: string, val: string) => {
    setState((prevState) => ({ ...prevState, [param]: val }));
    push(`${pathname}?` + createQueryString(param, val));
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams as any);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const params = new URLSearchParams('?' + queryString);
    const paramsObject: Record<string, string> = {};
    params.forEach((value, key) => {
      paramsObject[key] = value;
    });
    setState((prevState) => ({ ...prevState, ...paramsObject }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Component = row;

  const handleCSVDownload = () => {
    const headers = ['_id', 'email', 'createdAt', 'updatedAt', '__v'];
    const csvRows: any = data?.allData?.map((item) =>
      headers.map((header) => `"${(item as any)[header]}"`).join(',')
    );
    console.log(csvRows, 'csvRows');
    const csvContent = [headers.join(','), ...csvRows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <>
        <Card
          sx={{
            p: 2,
          }}>
          {(heading || isSearch || filters || isFilter) && (
            <Stack
              sx={{
                p: 1,
              }}
              spacing={2}
              direction='row'
              alignItems='center'
              justifyContent='space-between'>
              {heading && (
                <Typography
                  variant='h5'
                  color='text.primary'>
                  {heading}
                </Typography>
              )}

              {isSearch ? <Search /> : <div />}
              <div>
                {filters && (
                  <Stack
                    spacing={2}
                    direction='row'>
                    {filters?.map((item) => (
                      <FormControl
                        fullWidth
                        key={item.name}
                        sx={{ maxWidth: 200, minWidth: 140, width: '100%' }}>
                        <InputLabel id={'select-' + item.name}>
                          {item.name}
                        </InputLabel>
                        <Select
                          labelId={'select-' + item.name}
                          id={'select-' + item.name}
                          value={state[item.param] ?? ''}
                          label={item.name}
                          onChange={(e) =>
                            handleChange(item.param, e.target.value)
                          }>
                          <MenuItem value=''>None</MenuItem>
                          {item.data.map((v) => (
                            <MenuItem
                              value={v.slug}
                              key={v.slug}>
                              {v.name || v.title}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    ))}
                  </Stack>
                )}
                {isFilter && (
                  <Button
                    size='large'
                    variant='outlined'
                    color='inherit'
                    startIcon={<PiSlidersHorizontalLight />}
                    sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    All tasks
                  </Button>
                )}
              </div>
            </Stack>
          )}

          {!isLoading && data?.data?.length === 0 ? (
            <Typography variant='h5'>Data Not Found</Typography>
          ) : (
            <TableContainer>
              <Table>
                <TableHead headData={headData} />
                <TableBody
                  sx={{
                    '.MuiTableCell-root': {
                      color: 'text.secondary',
                    },
                  }}>
                  {(isLoading ? Array.from(new Array(6)) : data?.data).map(
                    (item: any, index: number) => (
                      <Component
                        key={index}
                        row={item}
                        index={index}
                        isLoading={isLoading}
                        {...rest}
                      />
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Card>
        {!isLoading && data?.count && (
          <Stack
            mt={2}
            pr={2}>
            <Pagination data={data} />
          </Stack>
        )}
      </>
    </>
  );
};

export default CustomTable;
