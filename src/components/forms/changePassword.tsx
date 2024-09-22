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
import {
  Box,
  Stack,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// icons
import { IoIosArrowRoundBack } from 'react-icons/io';
// icons
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';

interface FormValues {
  password: string;
  newPassword: string;
}

export default function ChangePasswordForm() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const redirect = searchParam.get('redirect');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  // const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const RegisterSchema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
    newPassword: Yup.string().required('Confirm Password is required'),
  });
  const formik = useFormik<FormValues>({
    initialValues: {
      password: '',
      newPassword: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values: any) => {
      setloading(true);
      setTimeout(() => {
        setloading(false);
        toast.success('Changed Password successful!');
        router.push(
          redirect ? `/auth/verify-otp?redirect=${redirect}` : `/dashboard`
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
            <Typography variant='h3'>Create new password</Typography>
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
              htmlFor='password'
              component={'label'}>
              New Password
            </Typography>
            <TextField
              id='password'
              fullWidth
              size='small'
              autoComplete='username'
              type={showPassword ? 'text' : 'password'}
              {...getFieldProps('password')}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={() => setShowPassword((prev) => !prev)}>
                      {showPassword ? (
                        <MdOutlineVisibility size={18} />
                      ) : (
                        <MdOutlineVisibilityOff size={18} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack
            gap={0.5}
            width={1}>
            <Typography
              variant='overline'
              color='text.primary'
              htmlFor='newPassword'
              component={'label'}>
              Confirm Password
            </Typography>
            <TextField
              id='newPassword'
              fullWidth
              size='small'
              autoComplete='username'
              type={showPassword1 ? 'text' : 'password'}
              {...getFieldProps('newPassword')}
              error={Boolean(touched.newPassword && errors.newPassword)}
              helperText={touched.newPassword && errors.newPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={() => setShowPassword1((prev) => !prev)}>
                      {showPassword1 ? (
                        <MdOutlineVisibility size={18} />
                      ) : (
                        <MdOutlineVisibilityOff size={18} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
