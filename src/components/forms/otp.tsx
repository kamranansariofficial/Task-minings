'use client';
import { useState } from 'react';
// yup
import * as Yup from 'yup';
// next
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
// formik
import { useFormik, FormikProvider, Form } from 'formik';
// toast
import { toast } from 'react-hot-toast';
// react component
import OtpInput from 'react-otp-input';
// mui
import { Box, Stack, Typography, Button, useTheme } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// icons
import { IoIosArrowRoundBack } from 'react-icons/io';

// Define Form Values and Yup Schema
interface FormValues {
  otp: string;
}

const validationSchema = Yup.object({
  otp: Yup.string()
    .length(4, 'OTP must be 4 digits')
    .required('OTP is required'),
});

export default function OTPForm() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const redirect = searchParam.get('redirect');
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  // Formik setup
  const formik = useFormik<FormValues>({
    initialValues: {
      otp: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      // Simulate async request
      setTimeout(() => {
        setLoading(false);
        toast.success('OTP Verified Successfully');
        // Perform redirection or other logic
        router.push(redirect || '/auth/change-password');
      }, 2000);
    },
  });

  const { values, errors, touched, handleSubmit, setFieldValue } = formik;

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
              Enter the OTP sent to your registered email.
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
              value={values.otp} // Connect Formik's value
              onChange={(otp) => setFieldValue('otp', otp)} // Update Formik state
              numInputs={4}
              placeholder='-' // This sets the placeholder for the input
              renderSeparator={<span> </span>}
              renderInput={(props: any) => (
                <input
                  {...props}
                  placeholder={`-`} // Set placeholder for each input as a dot or any character
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '20px',
                    minHeight: 63,
                    textAlign: 'center',
                    borderRadius: 8,
                    border: '1px solid' + theme.palette.divider,
                  }}
                />
              )}
              shouldAutoFocus
            />
            {touched.otp && errors.otp && (
              <Typography
                color='error'
                variant='caption'>
                {errors.otp}
              </Typography>
            )}
          </Box>
          <LoadingButton
            fullWidth
            type='submit'
            variant='contained'
            loading={loading}>
            Submit
          </LoadingButton>
          <Button disabled> Resend</Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
