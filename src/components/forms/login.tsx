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
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// icons
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';
import GoogleIcon from '../../../public/static/icons/google.svg';

interface FormValues {
  email: string;
  password: string;
  remember: boolean;
}

export default function LoginForm() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const redirect = searchParam.get('redirect');
  // const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email('Enter valid email')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password should be 8 characters or longer.'),
  });
  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values: any) => {
      setloading(true);
      setTimeout(() => {
        setloading(false);
        toast.success('Login successful!');
        router.push(
          redirect ? `/auth/verify-otp?redirect=${redirect}` : `/auth/login`
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
          <Typography
            variant='h3'
            pb={2}>
            Login To Task Minings
          </Typography>
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
          <Typography
            variant='subtitle1'
            sx={{ textAlign: 'right', textDecoration: 'none' }}
            component={Link}
            href='/auth/forget-password'
            color='primary'>
            Forget password
          </Typography>
          <LoadingButton
            fullWidth
            type='submit'
            variant='contained'
            loading={loading}>
            Log in
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
