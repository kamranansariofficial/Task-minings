'use client';
import { useState } from 'react';
// yup
import * as Yup from 'yup';
// next
import { useRouter } from 'next-nprogress-bar';
// formik
import { useFormik, Form, FormikProvider } from 'formik';
// toast
import { toast } from 'react-hot-toast';
// mui
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// icons
import { MdOutlineQrCodeScanner } from 'react-icons/md';

interface FormValues {
  email: string;
  address: string;
}

export default function WalletForm() {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email('Enter valid email')
      .required('Email is required'),
    address: Yup.string().required('Address is required'),
  });
  const formik = useFormik<FormValues>({
    initialValues: {
      address: '',
      email: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values: any) => {
      setloading(true);
      setTimeout(() => {
        setloading(false);
        toast.success('Account Added successful!');
      }, 5000); // 5 seconds delay
    },
  });
  const { errors, touched, handleSubmit, values, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form
        autoComplete='off'
        noValidate
        onSubmit={handleSubmit}>
        <Card
          sx={{
            mb: 3,
          }}>
          <CardContent>
            <Stack spacing={2}>
              <Stack
                gap={0.5}
                width={1}>
                <Typography
                  variant='overline'
                  color='text.primary'
                  htmlFor='address'
                  component={'label'}>
                  Wallet Address
                </Typography>
                <TextField
                  id='address'
                  fullWidth
                  size='small'
                  autoComplete='current-address'
                  type='text'
                  {...getFieldProps('address')}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton edge='end'>
                          <MdOutlineQrCodeScanner />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={Boolean(touched.address && errors.address)}
                  helperText={touched.address && errors.address}
                />
              </Stack>
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
            </Stack>
          </CardContent>
        </Card>
        <LoadingButton
          type='submit'
          variant='contained'
          loading={loading}
          sx={{
            px: 4,
            display: 'flex',
            ml: 'auto',
            mb: 3,
          }}>
          Save
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
