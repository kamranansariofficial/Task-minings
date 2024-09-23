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
import NoteIcon from '../../../../public/static/icons/notification-alert.svg';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';

// icons
import { BiMenuAltLeft } from 'react-icons/bi';
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
        px: { xs: 0, md: 4.5 },
        top: { xs: 0, md: 40 },
      }}>
      <Card
        sx={{
          borderRadius: { xs: 0, md: 3 },
        }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            size='small'
            onClick={handleDrawerToggle}
            sx={{ mr: 0.5, display: { sm: 'none' } }}>
            <BiMenuAltLeft size={24} />
          </IconButton>
          <Typography
            variant='h4'
            fontSize={{ xs: 14, md: 24 }}
            noWrap
            component='div'>
            Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            direction='row'
            alignItems='center'
            spacing={{ xs: 1, md: 4 }}>
            {/* <IconButton
              sx={{
                height: 41,
                width: 41,
                borderRadius: '13px !important',
                bgcolor: isDarkMode ? '#4E4E4E' : '#DCDFE6',
              }}
              onClick={() => dispatch(settingSlice.actions.changeMode())}>
              {isDarkMode ? <LightMode /> : <DarkMode />}
            </IconButton> */}
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
              <Box
                sx={{
                  display: 'contents',
                  svg: {
                    width: { xs: 22, md: 26 },
                    height: { xs: 22, md: 26 },
                  },
                }}>
                <Bitcoin />
              </Box>
              <Typography
                variant='h5'
                color='primary.main'>
                13,583{' ' + ' '}
              </Typography>
              <IconButton size='small'>
                <MdOutlineVisibilityOff size={16} />
              </IconButton>
            </Stack>
            {/* <LocaleSwitcher /> */}
            <IconButton
              size='small'
              color='inherit'
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}>
              <FaBell />
            </IconButton>
            <IconButton
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
