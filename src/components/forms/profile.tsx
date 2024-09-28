'use client';
import React, { useState } from 'react';
// yup
import * as Yup from 'yup';
// mui
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
  IconButton,
  Button,
  Divider,
  Grid,
  TextField,
  Autocomplete,
  InputAdornment,
} from '@mui/material';
import Image from 'next/image';
import AvatarImg from '@public/static/avatar-2.png';
import { DatePicker } from '@mui/x-date-pickers';
import countries from 'src/components/countries.json';
import Input from 'react-phone-number-input/input';

// formik
import { useFormik, Form, FormikProvider } from 'formik';
// toast
import { toast } from 'react-hot-toast';
// icons
import { IoMdCopy } from 'react-icons/io';
import Icon from '@/utils/icon';
import { FaRegEdit } from 'react-icons/fa';

interface FormValues {
  firstName: string;
  lastName: string;
  gender: string;
  dob: any;
  country: string;
  locale: string;
  email: string;
  code: any;
  phone: string;
}

const CustomInput = React.forwardRef(function custom(props, ref) {
  return (
    <TextField
      size='small'
      {...props}
      inputRef={ref}
      {...((props as any)?.InputProps?.sx && {
        sx: (props as any)?.InputProps?.sx,
      })}
      fullWidth
    />
  );
});

export default function ProfileForm() {
  const theme = useTheme();
  const phoneInputRef = React.useRef(null);

  const [loading, setloading] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(50, 'Too long!')
      .required('First name is required'),
    lastName: Yup.string()
      .max(50, 'Too long!')
      .required('Last name is required'),
    email: Yup.string()
      .email('Enter valid email')
      .required('Email is required'),
  });
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      gender: 'male',
      dob: null,
      country: 'Andorra',
      locale: 'english',
      email: '',
      code: countries.find((item) => item.code === 'AR'),
      phone: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values: any) => {
      setloading(true);
      setTimeout(() => {
        setloading(false);
        toast.success('Profile Update successful!');
      }, 5000); // 5 seconds delay
    },
  });

  const { errors, touched, handleSubmit, values, getFieldProps } = formik;

  return (
    <Card>
      <CardContent
        sx={{
          px: { xs: 2, md: 3 },
        }}>
        <Stack
          direction='row'
          alignItems='center'
          spacing={{ xs: 1, md: 2 }}
          pb={3}>
          <Box
            sx={{
              position: 'relative',
              height: { xs: 64, md: 84 },
              width: { xs: 64, md: 84 },
              borderRadius: '50%',
            }}>
            <Image
              src={AvatarImg}
              alt='avatar'
              priority
              fill
              objectFit='cover'
            />
          </Box>
          <Stack>
            <Typography variant='h6'>
              Hailey Patrick{' '}
              <Typography
                variant='body2'
                color='primary'
                component='span'
                sx={{
                  bgcolor: theme.palette.background.default,
                  p: 0.2,
                  px: 1,
                  borderRadius: 2,
                }}>
                Active
              </Typography>
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{
                display: 'flex',
                alignItems: 'center',

                svg: {
                  color: 'text.secondary',
                },
              }}>
              ID: 2034859994
              <IconButton size='small'>
                <IoMdCopy size={16} />
              </IconButton>
            </Typography>
            <Stack
              mt={0.5}
              direction='row'
              alignItems='center'
              spacing={{ xs: 1, md: 2 }}>
              <Button
                size='small'
                variant='contained'
                startIcon={<Icon name='cloud_upload' />}
                color='primary'>
                Upload
              </Button>
              <Button
                size='small'
                // disabled
                variant='text'
                startIcon={<FaRegEdit size={15} />}
                color='inherit'
                sx={{
                  px: 2,
                  bgcolor: theme.palette.background.default,
                  color: theme.palette.text.secondary,
                }}>
                change
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Divider />
        <Box pt={3}>
          <FormikProvider value={formik}>
            <Form
              autoComplete='off'
              noValidate
              onSubmit={handleSubmit}>
              <Grid
                container
                spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={6}>
                  <Stack
                    gap={0.5}
                    width={1}>
                    <Typography
                      variant='overline'
                      color='text.primary'
                      htmlFor='firstName'
                      component={'label'}>
                      First Name
                    </Typography>
                    <TextField
                      id='firstName'
                      fullWidth
                      size='small'
                      type='text'
                      {...getFieldProps('firstName')}
                      error={Boolean(touched.firstName && errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                    />
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}>
                  {' '}
                  <Stack
                    gap={0.5}
                    width={1}>
                    <Typography
                      variant='overline'
                      color='text.primary'
                      htmlFor='lastName'
                      component={'label'}>
                      Last Name
                    </Typography>
                    <TextField
                      fullWidth
                      id='lastName'
                      size='small'
                      type='text'
                      {...getFieldProps('lastName')}
                      error={Boolean(touched.lastName && errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                    />
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}>
                  <Stack
                    spacing={0.5}
                    width={1}>
                    <Typography
                      variant='overline'
                      color='text.primary'
                      htmlFor='gender'
                      component={'label'}>
                      Gender
                    </Typography>
                    <TextField
                      select
                      size='small'
                      fullWidth
                      id='gender'
                      placeholder='Gender'
                      {...getFieldProps('gender')}
                      SelectProps={{ native: true }}
                      error={Boolean(touched.gender && errors.gender)}
                      helperText={touched.gender && errors.gender}>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </TextField>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}>
                  <Stack
                    spacing={0.5}
                    width={1}>
                    <Typography
                      variant='overline'
                      color='text.primary'
                      htmlFor='dob'
                      component={'label'}>
                      Date of birth
                    </Typography>
                    <DatePicker
                      slotProps={{
                        textField: {
                          size: 'small',
                          fullWidth: true,
                        },
                      }}
                      value={values.dob}
                      onChange={(value) => {
                        formik.setFieldValue('dob', value);
                      }}
                      format='dd-MM-yyyy'
                    />
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}>
                  <Stack
                    spacing={0.5}
                    width={1}>
                    <Typography
                      variant='overline'
                      color='text.primary'
                      htmlFor='country'
                      component={'label'}>
                      Country
                    </Typography>
                    <TextField
                      id='country'
                      size='small'
                      select
                      fullWidth
                      placeholder='Country'
                      {...getFieldProps('country')}
                      SelectProps={{ native: true }}
                      error={Boolean(touched.country && errors.country)}
                      helperText={touched.country && errors.country}>
                      {countries.map((option: any) => (
                        <option
                          key={option.code}
                          value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}>
                  <Stack
                    spacing={0.5}
                    width={1}>
                    <Typography
                      variant='overline'
                      color='text.primary'
                      htmlFor='locale'
                      component={'label'}>
                      Language
                    </Typography>
                    <TextField
                      select
                      size='small'
                      fullWidth
                      id='locale'
                      placeholder='locale'
                      {...getFieldProps('locale')}
                      SelectProps={{ native: true }}
                      error={Boolean(touched.locale && errors.locale)}
                      helperText={touched.locale && errors.locale}>
                      <option value='english'>English</option>
                      <option value='arabic'>Arabic</option>
                    </TextField>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}>
                  <Stack
                    gap={0.5}
                    width={1}>
                    <Typography
                      variant='overline'
                      color='text.primary'
                      htmlFor='email'
                      component={'label'}>
                      Email
                    </Typography>
                    <TextField
                      id='email'
                      fullWidth
                      size='small'
                      autoComplete='username'
                      type='email'
                      {...getFieldProps('email')}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}>
                  <Stack
                    gap={0.5}
                    width={1}>
                    <Typography
                      variant='overline'
                      color='text.primary'
                      htmlFor='number'
                      component={'label'}>
                      Mobile Number
                    </Typography>
                    <Stack
                      direction='row'
                      spacing={2}>
                      <Autocomplete
                        size='small'
                        disableClearable={true}
                        sx={{ minWidth: 120 }}
                        id='country-code'
                        options={countries}
                        autoHighlight
                        value={values.code}
                        onChange={(event, value) => {
                          formik.setFieldValue('code', value);
                        }}
                        getOptionLabel={(option) => option.phone}
                        isOptionEqualToValue={(option: any, value) =>
                          option.phone === value?.phone
                        }
                        renderOption={(props, option) => {
                          const { key, ...optionProps } = props;
                          return (
                            <Box
                              key={key}
                              component='li'
                              sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                              {...optionProps}>
                              <img
                                loading='lazy'
                                width='20'
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                alt=''
                              />
                              {option.phone}
                            </Box>
                          );
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size='small'
                            placeholder='Code'
                            slotProps={{
                              input: {
                                ...params.InputProps,
                                startAdornment: (
                                  <>
                                    <InputAdornment position='start'>
                                      <img
                                        loading='lazy'
                                        width='20'
                                        srcSet={`https://flagcdn.com/w40/${values?.code?.code.toLowerCase()}.png 2x`}
                                        src={`https://flagcdn.com/w20/${values?.code?.code.toLowerCase()}.png`}
                                        alt=''
                                      />
                                    </InputAdornment>
                                    {params.InputProps.startAdornment}
                                  </>
                                ),
                              },
                              htmlInput: {
                                ...params.inputProps,
                                autoComplete: 'new-password',
                              },
                            }}
                          />
                        )}
                      />
                      <Input
                        ref={phoneInputRef}
                        country={(values?.code as any) ?? 'AR'}
                        fullWidth
                        inputComponent={CustomInput as any}
                        value={values.phone}
                        onChange={(value) => {
                          formik.setFieldValue('phone', value);
                        }}
                      />
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Form>
          </FormikProvider>
        </Box>
      </CardContent>
    </Card>
  );
}
