'use client';
import { useState } from 'react';
// yup
import * as Yup from 'yup';
// next
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import Link from 'next/link';
// formik
import { useFormik, Form, FormikProvider } from 'formik';
// toast
import { toast } from 'react-hot-toast';
// redux
// import { useDispatch } from 'react-redux';
// import { setLogin } from 'src/lib/redux/slices/user';

// mui
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// icons
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';
import GoogleIcon from '../../../public/static/icons/google.svg';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  remember: boolean;
}

export default function RegisterForm() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const searchParam = useSearchParams();
  const redirect = searchParam.get('redirect');
  // const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password should be 8 characters or longer.'),
  });
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      remember: false,
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values: any) => {
      setloading(true);

      setTimeout(() => {
        setloading(false);
        toast.success('Registration successful!');
        router.push(
          redirect ? `/auth/verify-otp?redirect=${redirect}` : `/dashboard`
        );
      }, 5000); // 5 seconds delay
    },
  });
  // const { mutate } = useMutation(api.register, {
  //   onSuccess: async (data: any) => {
  //     dispatch(setLogin(data.user));
  //     await createCookies('token', data.token);
  //     toast.success('OTP sent to your email' + ' ' + data.user.firstName);
  //     setloading(false);
  //     router.push(
  //       redirect ? `/auth/verify-otp?redirect=${redirect}` : `/auth/verify-otp`
  //     );
  //   },
  //   onError: (err: any) => {
  //     const message = JSON.stringify(err.response.data.message);
  //     toast.error(message ? JSON.parse(message) : 'Something went wrong!');
  //     setloading(false);
  //   },
  // });
  const { errors, touched, handleSubmit, values, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form
        autoComplete='off'
        noValidate
        onSubmit={handleSubmit}
        style={{
          maxWidth: 450,
        }}>
        <Stack spacing={2}>
          <Typography
            variant='h3'
            textAlign={{ xs: 'center', md: 'left' }}
            pb={2}>
            {isMobile ? 'Sign up' : 'Sign up To Task Minings'}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}>
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
          <Stack
            gap={0.5}
            width={1}>
            <Typography
              variant='overline'
              color='text.primary'
              htmlFor='password'
              component={'label'}>
              Password
            </Typography>
            <TextField
              id='password'
              fullWidth
              size='small'
              autoComplete='current-password'
              type={showPassword ? 'text' : 'password'}
              {...getFieldProps('password')}
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
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />
          </Stack>
          <FormControlLabel
            sx={{
              alignItems: 'start',
              gap: 1,
              '& .MuiButtonBase-root': {
                p: 0.3,
              },
            }}
            control={
              <Checkbox
                {...getFieldProps('remember')}
                checked={values.remember}
              />
            }
            label={
              <Typography
                variant='body2'
                fontSize={{ xs: 10, md: 14 }}
                color='text.secondary'
                sx={{
                  a: {
                    color: 'text.primary',
                    fontWeight: 600,
                  },
                }}>
                Creating an account means you're okay with our{' '}
                <Link href='#'>Terms of Service, Privacy Policy,</Link> and our
                default <Link href='#'>Notification Settings</Link>
              </Typography>
            }
          />

          <LoadingButton
            fullWidth
            type='submit'
            variant='contained'
            loading={loading}>
            Create an account
          </LoadingButton>
          <Divider>
            <Typography
              variant='subtitle1'
              color='text.primary'>
              OR
            </Typography>
          </Divider>
          <Button
            variant='outlined'
            color='inherit'
            startIcon={<GoogleIcon />}>
            Sign Up with Google
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
