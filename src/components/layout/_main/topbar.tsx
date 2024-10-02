'use client';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useSelector, useDispatch, darkMode, settingSlice } from '@/lib/redux';
import LocaleSwitcher from '@/components/locale-switcher';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  IconButton,
  Button,
  Divider,
  Typography,
  useScrollTrigger,
  useTheme,
  Drawer,
} from '@mui/material';
// icons
import Icon from '@/utils/icon';
import LightLogoRemove from '@public/static/logo-light-remove.png';
import LightLogo from '@public/static/logo-light.png';
import DarkLogo from '@public/static/logo-dark.png';
import Link from 'next/link';
import Image from 'next/image';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BiMenuAltLeft } from 'react-icons/bi';
import { MdOutlineClear } from 'react-icons/md';

export default function AppbarMain({ ...props }) {
  const { window } = props;
  const router = useRouter();
  const isDarkMode = useSelector(darkMode);
  const dispatch = useDispatch();
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // Remove this const when copying and pasting into your project.
  const container = window ? () => window().document.body : undefined;

  const data = [
    {
      title: 'Home',
      path: '/home',
    },
    {
      title: 'Buy Crypto',
      path: '/crypto',
      isIcon: true,
    },
    {
      title: 'Market',
      path: '/market',
    },
    {
      title: 'Discover',
      path: '/discover',
    },
  ];

  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          top: { xs: 0, md: trigger ? 0 : 40 },
          background: {
            xs: theme.palette.background.paper,
            md: trigger ? theme.palette.background.paper : 'transparent',
          },
          boxShadow: trigger ? '2px 4px 26.8px 0px #3F80FF14' : 'none',
          transition:
            'background-color 0.5s ease, box-shadow 0.3s ease,top 0.5s ease',
        }}>
        <Container>
          <Toolbar
            sx={{
              px: 0 + '!important',
            }}>
            <IconButton
              aria-label='open drawer'
              edge='start'
              size='small'
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: 'text.primary' }}>
              <BiMenuAltLeft size={24} />
            </IconButton>
            <Stack
              direction='row'
              alignItems={'center'}
              spacing={5}
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}>
              <Box
                component={Link}
                href='#'
                sx={{
                  position: 'relative',
                  height: 38,
                  width: 160,
                }}>
                <Image
                  src={
                    isDarkMode
                      ? DarkLogo
                      : !trigger
                      ? LightLogoRemove
                      : LightLogo
                  }
                  alt='logo'
                  priority
                  fill
                  objectFit='contain'
                />
              </Box>
              <Divider
                orientation='vertical'
                variant='middle'
                flexItem
              />
              {data.map((item) => (
                <Typography
                  variant='subtitle2'
                  color='text.secondary'
                  component={Link}
                  href={item.path}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    transition: 'ease-in-out .3s',
                    ':hover': {
                      color: 'text.primary',
                    },
                  }}>
                  {item.title}
                  {item.isIcon && <MdKeyboardArrowDown />}
                </Typography>
              ))}
            </Stack>
            <Box sx={{ flexGrow: 1 }} />
            <Stack
              direction='row'
              alignItems={'center'}
              spacing={{ xs: 0.5, md: 1.5 }}>
              <IconButton
                sx={{
                  height: { xs: 30, md: 40 },
                  width: { xs: 30, md: 40 },
                  borderRadius: { xs: 2, md: '13px !important' },
                  bgcolor: isDarkMode ? '#4E4E4E' : '#DCDFE6',
                }}
                onClick={() => dispatch(settingSlice.actions.changeMode())}>
                <Icon name={isDarkMode ? 'wb_sunny' : 'dark_mode'} />
              </IconButton>
              <LocaleSwitcher />
              <Stack
                direction='row'
                alignItems={'center'}
                spacing={1}
                sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button
                  variant='outlined'
                  color='inherit'
                  sx={{
                    color: 'text.primary',
                    borderWidth: 2,
                  }}>
                  login
                </Button>
                <Button
                  variant='contained'
                  color='primary'>
                  sign up
                </Button>
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            border: 'none',
            p: 1,
            bgcolor: (theme) => theme.palette.background.paper,
          },
        }}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{
            mb: 2,
            display: { xs: 'flex', md: 'none' },
          }}>
          <IconButton
            sx={{
              height: { xs: 30, md: 40 },
              width: { xs: 30, md: 40 },
              borderRadius: { xs: 2, md: '13px !important' },
              bgcolor: isDarkMode ? '#4E4E4E' : '#DCDFE6',
            }}
            onClick={() => dispatch(settingSlice.actions.changeMode())}>
            <Icon name={isDarkMode ? 'wb_sunny' : 'dark_mode'} />
          </IconButton>
          <LocaleSwitcher />
          <IconButton
            color='inherit'
            size='small'
            onClick={handleDrawerClose}>
            <MdOutlineClear />
          </IconButton>
        </Stack>

        <Stack spacing={4}>
          <Box
            component={Link}
            href='#'
            sx={{
              position: 'relative',
              height: 38,
              width: 160,
            }}>
            <Image
              src={isDarkMode ? DarkLogo : LightLogo}
              alt='logo'
              priority
              fill
              objectFit='contain'
            />
          </Box>
          {data.map((item) => (
            <Typography
              variant='subtitle2'
              color='text.secondary'
              component={Link}
              href={item.path}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                transition: 'ease-in-out .3s',
                ':hover': {
                  color: 'text.primary',
                },
              }}>
              {item.title}
              {item.isIcon && <MdKeyboardArrowDown />}
            </Typography>
          ))}
          <Stack
            direction='row'
            alignItems={'center'}
            spacing={1}>
            <Button
              variant='outlined'
              color='inherit'
              sx={{
                color: 'text.primary',
                borderWidth: 2,
              }}>
              login
            </Button>
            <Button
              variant='contained'
              color='primary'>
              sign up
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
