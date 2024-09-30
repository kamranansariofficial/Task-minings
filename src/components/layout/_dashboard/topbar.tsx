import React from 'react';
// mui
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch, darkMode, settingSlice } from '@/lib/redux';
// icons
import DarkMode from '@public/static/icons/dark_mode.svg';
import LightMode from '@public/static/icons/wb_sunny.svg';
import Bitcoin from '@public/static/icons/bitcoin-cpu-1.svg';
import NoteIcon from '@public/static/icons/notification-alert.svg';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';

// icons
import { BiMenuAltLeft } from 'react-icons/bi';
import {
  Box,
  Card,
  Stack,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
} from '@mui/material';
import LocaleSwitcher from '@/components/locale-switcher';
import UserPopover from '@/components/popover/userPopover';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import Icon from '@/utils/icon';

export default function UserDashboardAppbar({ ...props }) {
  const pathname = usePathname();
  const router = useRouter();
  const { drawerWidth, handleDrawerToggle } = props;
  const isDarkMode = useSelector(darkMode);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const split = pathname.split('/');
  const lastPath = split[split.length - 1];

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });
  return (
    <AppBar
      position='fixed'
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        background: trigger ? theme.palette.background.paper : 'transparent',
        boxShadow: trigger ? '2px 4px 26.8px 0px #3F80FF14' : 'none',
        px: { xs: 0, md: 4.5 },
        transition:
          'background-color 0.5s ease, box-shadow 0.3s ease,top 0.5s ease',
        top: { xs: 0, md: trigger ? 0 : 40 },
        backdropFilter: 'blur(6px)',
      }}>
      <Card
        sx={{
          background: trigger
            ? 'transparent !important'
            : theme.palette.background.paper,
          borderRadius: { xs: 0, md: 3 },
          boxShadow: trigger ? 'none' : 'auto',
        }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            size='small'
            onClick={handleDrawerToggle}
            sx={{ mr: 0.5, display: { md: 'none' } }}>
            <BiMenuAltLeft size={24} />
          </IconButton>
          <Typography
            variant='h4'
            textTransform='capitalize'
            fontSize={{ xs: 14, md: 24 }}
            noWrap
            component='div'>
            {lastPath.replaceAll('-', ' ')}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            direction='row'
            alignItems='center'
            spacing={{ xs: 1, md: 4 }}>
            <IconButton
              sx={{
                height: 41,
                width: 41,
                borderRadius: '13px !important',
                bgcolor: isDarkMode ? '#4E4E4E' : '#DCDFE6',
                display: { xs: 'none', md: 'flex' },
              }}
              onClick={() => dispatch(settingSlice.actions.changeMode())}>
              {isDarkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
            <Stack
              direction='row'
              alignItems='center'
              spacing={{ xs: 0.5, md: 1 }}
              sx={{
                px: { xs: 0, md: 1.5 },
                py: { xs: 0, md: 0.5 },
                borderRadius: { xs: 1.5, md: 3 },
                border: (theme) => '1px solid' + theme.palette.divider,
                color: 'primary.main',
              }}>
              <Icon name='bitcoin-cpu-1' />
              <Typography
                variant='h5'
                color='primary.main'>
                13,583{' ' + ' '}
              </Typography>
              <IconButton size='small'>
                <MdOutlineVisibilityOff size={isMobile ? 16 : 24} />
              </IconButton>
            </Stack>
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
              }}>
              <LocaleSwitcher />
            </Box>
            <IconButton
              size='small'
              color='inherit'
              onClick={() => router.push('/dashboard/notification')}
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}>
              <FaBell />
            </IconButton>
            <IconButton
              onClick={() => router.push('/dashboard/notification')}
              sx={{
                display: { xs: 'none', md: 'flex' },
                color: 'text.primary',
              }}>
              <NoteIcon />
            </IconButton>
          </Stack>
          <UserPopover />
        </Toolbar>
      </Card>
    </AppBar>
  );
}
