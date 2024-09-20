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
// react component
import OtpInput from 'react-otp-input';
// mui
import { Box, Stack, TextField, Typography, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// icons
import { IoIosArrowRoundBack } from 'react-icons/io';

interface FormValues {
  email: string;
}

export default function OTPForm() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const redirect = searchParam.get('redirect');
  // const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [otp, setOtp] = useState('');
  const [complete, setComplete] = useState(false);

  const onOtpChange = (value: any) => {
    setOtp(value);
    setComplete(false); // Reset complete state
  };
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
        toast.success('OTP is Verifed!');
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
              }}
              startIcon={<IoIosArrowRoundBack size={24} />}>
              Back
            </Button>
          </Box>
          <Stack>
            <Typography variant='h3'>OTP</Typography>
            <Typography
              variant='body2'
              color='text.secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt .
            </Typography>
          </Stack>
          <Box
            sx={{
              '.MuiFormControl-root': {
                width: '100% !important',
              },
            }}>
            <OtpInput
              containerStyle={{
                display: 'flex',
                gap: 8,
                width: '100%', // Ensure the container is full width
              }}
              value={otp}
              onChange={onOtpChange}
              numInputs={4}
              placeholder='-' // This sets the placeholder for the input
              renderSeparator={<span> </span>}
              renderInput={(props: any) => (
                <TextField
                  fullWidth
                  placeholder='-'
                  {...props}
                />
              )}
              shouldAutoFocus
            />
          </Box>
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
