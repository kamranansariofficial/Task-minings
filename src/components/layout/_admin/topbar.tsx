import React from 'react';
// mui
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch, darkMode, settingSlice } from '@/lib/redux';
// icons
import DarkMode from '../../../../public/static/icons/dark_mode.svg';
import LightMode from '../../../../public/static/icons/wb_sunny.svg';
import Bitcoin from '../../../../public/static/icons/bitcoin-cpu.svg';
import EyeIcon from '../../../../public/static/icons/view-off-slash.svg';
import NoteIcon from '../../../../public/static/icons/notification-alert.svg';

// icons
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Card, Stack } from '@mui/material';
import LocaleSwitcher from '@/components/locale-switcher';
import UserPopover from '@/components/popover/userPopover';

export default function DashboardAppbar({ ...props }) {
  const { drawerWidth, handleDrawerToggle } = props;
  const isDarkMode = useSelector(darkMode);
  const dispatch = useDispatch();
  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        background: 'transparent',
        boxShadow: 'none',
        px: 4.5,
        top: 40,
      }}>
      <Card>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h4'
            noWrap
            component='div'>
            Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            direction='row'
            alignItems='center'
            spacing={4}>
            <IconButton
              sx={{
                height: 41,
                width: 41,
                borderRadius: '13px !important',
                bgcolor: isDarkMode ? '#4E4E4E' : '#DCDFE6',
              }}
              onClick={() => dispatch(settingSlice.actions.changeMode())}>
              {isDarkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
            <Stack
              direction='row'
              alignItems='center'
              spacing={1}
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: 3,
                border: (theme) => '1px solid' + theme.palette.divider,
                color: 'primary.main',
              }}>
              <Bitcoin />
              <Typography
                variant='h5'
                color='primary.main'>
                13,583{' ' + ' '}
              </Typography>
              <IconButton
                size='small'
                sx={{
                  color: 'text.secondary',
                  display: 'flex',
                }}>
                <EyeIcon />
              </IconButton>
            </Stack>
            <LocaleSwitcher />
            <IconButton
              sx={{
                color: 'text.primary',
                display: 'flex',
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
