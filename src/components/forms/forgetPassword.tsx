'use client';
import { useState } from 'react';
// yup
import * as Yup from 'yup';
// next
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
// formik
import { useFormik, Form, FormikProvider } from 'formik';
// toast
import { toast } from 'react-hot-toast';
// mui
import { Box, Stack, TextField, Typography, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// icons
import { IoIosArrowRoundBack } from 'react-icons/io';

interface FormValues {
  email: string;
}

export default function ForgetPasswordForm() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const redirect = searchParam.get('redirect');
  // const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email('Enter valid email')
      .required('Email is required'),
  });
  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values: any) => {
      setloading(true);
      setTimeout(() => {
        setloading(false);
        toast.success('Forget Password successful!');
        router.push(
          redirect
            ? `/auth/verify-otp?redirect=${redirect}`
            : `/auth/verify-otp`
        );
      }, 5000); // 5 seconds delay
    },
  });
  const { errors, touched, handleSubmit, values, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form
        autoComplete='off'
        noValidate
        onSubmit={handleSubmit}
        style={{
          maxWidth: 450,
          width: '100%',
        }}>
        <Stack spacing={2}>
          <Box>
            <Button
              onClick={() => router.push('/auth/login')}
              variant='text'
              size='small'
              color='inherit'
              sx={{
                fontWeight: 400,
                display: { xs: 'none', md: 'flex' },
              }}
              startIcon={<IoIosArrowRoundBack size={24} />}>
              Back
            </Button>
          </Box>
          <Stack textAlign={{ xs: 'center', md: 'left' }}>
            <Typography variant='h3'>Forgot password</Typography>
            <Typography
              variant='body2'
              color='text.secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt .
            </Typography>
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
          <LoadingButton
            fullWidth
            type='submit'
            variant='contained'
            loading={loading}>
            Send OTP
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
