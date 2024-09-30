'use client';
import React from 'react';
// mui
import {
  alpha,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
// mui icons
import DashboardIcon from '@public/static/icons/dashboard.svg';
import LogoutIcon from '@public/static/icons/logout-04.svg';
import TaskIcon from '@public/static/icons/task-edit-02.svg';
import BagIcon from '@public/static/icons/bitcoin-bag.svg';
import ChartIcon from '@public/static/icons/chart-relationship.svg';
import CardIcon from '@public/static/icons/credit-card-pos.svg';
import SupportIcon from '@public/static/icons/customer-support.svg';
import SettingIcon from '@public/static/icons/ai-setting.svg';
import LightLogo from '@public/static/logo-light.png';
import DarkLogo from '@public/static/logo-dark.png';
import DarkMode from '@public/static/icons/dark_mode.svg';
import LightMode from '@public/static/icons/wb_sunny.svg';
import WalletIcon from '@public/static/icons/wallet-02.svg';
import WithdrawIcon from '@public/static/icons/bitcoin-withdraw.svg';
import { MdOutlineClear } from 'react-icons/md';

import Image from 'next/image';
import Link from 'next/link';
import Scrollbar from '@/components/Scrollbar';
import { usePathname } from 'next/navigation';
import { darkMode, settingSlice } from '@/lib/redux';
import { useDispatch, useSelector } from 'react-redux';
import LocaleSwitcher from '@/components/locale-switcher';
import { useRouter } from 'next-nprogress-bar';

const navData = [
  {
    title: 'Main Menu',
    data: [
      {
        name: 'Dashboard',
        slug: 'dashboard',
        path: '/dashboard',
        icon: <DashboardIcon />,
      },
      {
        name: 'Task',
        slug: 'task',
        path: '/dashboard/task',
        icon: <TaskIcon />,
      },
      {
        name: 'All Submissions',
        slug: 'submissions',
        path: '/dashboard/submissions',
        icon: <BagIcon />,
      },
      {
        name: 'Referrals',
        slug: 'referrals',
        path: '/dashboard/referrals',
        icon: <ChartIcon />,
      },
      {
        name: 'Transaction',
        slug: 'transaction',
        path: '/dashboard/transaction',
        icon: <CardIcon />,
      },

      {
        name: 'Wallet Only',
        slug: 'add-wallet',
        path: '/dashboard/add-wallet',
        icon: <WalletIcon />,
      },
      {
        name: 'Withdrawal Only',
        slug: 'withdrawal-only',
        path: '/dashboard/withdrawal-only',
        icon: <WithdrawIcon />,
      },
    ],
  },
  {
    title: 'Assistant',
    data: [
      {
        name: 'Support',
        slug: 'support',
        path: '/dashboard/support',
        icon: <SupportIcon />,
      },
      {
        name: 'Settings',
        slug: 'settings',
        path: '/dashboard/settings',
        icon: <SettingIcon />,
      },
    ],
  },
];

export default function UserDashboardSidebar({ ...props }) {
  const {
    drawerWidth,
    container,
    mobileOpen,
    handleDrawerTransitionEnd,
    handleDrawerClose,
  } = props;
  const router = useRouter();
  const pathname = usePathname();

  const isDarkMode = useSelector(darkMode);
  const dispatch = useDispatch();
  const [active, setActive] = React.useState('');
  const [initial, setInitial] = React.useState(false);
  React.useEffect(() => {
    setInitial(true);
  }, [pathname]);
  const updateActive = (slug: string) => {
    const split = pathname.split('/');
    const lastPath = split[split.length - 1];
    if (lastPath === 'dashboard') {
      return pathname.includes(slug);
    } else {
      const url = pathname.replace('/dashboard', '');
      return url.includes(slug);
    }
  };

  const drawer = (
    <Box
      py={{ xs: 1, md: 2 }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: (theme) => theme.palette.background.paper,
      }}>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{
          ml: 0.5,
          mb: 2,
          display: { xs: 'flex', md: 'none' },
        }}>
        <IconButton
          sx={{
            height: 40,
            width: 40,
            borderRadius: '13px !important',
            bgcolor: isDarkMode ? '#4E4E4E' : '#DCDFE6',
          }}
          onClick={() => dispatch(settingSlice.actions.changeMode())}>
          {isDarkMode ? <LightMode /> : <DarkMode />}
        </IconButton>
        <LocaleSwitcher />
        <IconButton
          color='inherit'
          onClick={handleDrawerClose}>
          <MdOutlineClear />
        </IconButton>
      </Stack>
      <Toolbar>
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
      </Toolbar>

      {/* Scrollable section */}
      <Scrollbar
        sx={{
          flexGrow: 1, // Allows the content to grow and scroll properly
          maxHeight: 'calc(100vh - 160px)', // Adjust for fixed section height
          '& .simplebar-content': {
            display: 'flex',
            flexDirection: 'column',
          },
        }}>
        <Box px={2.5}>
          {navData.map((item) => (
            <React.Fragment key={item.title}>
              <Stack
                spacing={1}
                mt={6}>
                <Typography
                  variant='body2'
                  color='text.secondary'>
                  {item.title}
                </Typography>
                <List>
                  {item.data.map((text) => (
                    <ListItem
                      key={text.name}
                      disablePadding>
                      <ListItemButton
                        onClick={() => router.push(text.path)}
                        sx={{
                          minHeight: 52,
                          mb: 0.1,
                          borderRadius: 1,
                          transition: 'ease-in-out .5s',
                          color: 'text.secondary',
                          borderLeft: '3px solid transparent',
                          svg: {
                            color: 'text.secondary',
                          },
                          ...(updateActive(text.slug) &&
                            initial && {
                              borderLeft: (theme) =>
                                '3px solid' + theme.palette.primary.main,
                              color: 'primary.main',
                              bgcolor: (theme) =>
                                alpha(theme.palette.primary.main, 0.2),
                              pl: 4,
                              svg: {
                                color: 'primary.main',
                              },
                            }),
                          ':hover': {
                            borderLeft: (theme) =>
                              '3px solid' + theme.palette.primary.main,
                            color: 'primary.main',
                            bgcolor: (theme) =>
                              alpha(theme.palette.primary.main, 0.2),
                            pl: 4,
                            svg: {
                              color: 'primary.main',
                            },
                          },
                        }}>
                        <ListItemIcon
                          sx={{
                            minWidth: 30,
                          }}>
                          {text.icon}
                        </ListItemIcon>
                        <Typography
                          variant='body2'
                          fontWeight={updateActive(text.slug) ? 600 : 400}>
                          {text.name}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </React.Fragment>
          ))}
        </Box>
      </Scrollbar>

      {/* Fixed section at the bottom */}
      <Box
        sx={{
          px: 2.5,
          bgcolor: 'background.paper',
        }}>
        <Divider />
        <Button
          variant='text'
          color='inherit'
          size='large'
          fullWidth
          startIcon={<LogoutIcon />}
          sx={{
            mt: 1,
            fontWeight: 400,
            color: 'text.secondary',
          }}>
          Log out
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box
      component='nav'
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label='mailbox folders'>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            width: drawerWidth,
            border: 'none',
            bgcolor: (theme) => theme.palette.background.paper,
          },
        }}>
        {drawer}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            overflow: 'hidden',
            border: 'none',
            width: drawerWidth,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // Ensures space for the fixed content at the bottom
          },
        }}
        open>
        {drawer}
      </Drawer>
    </Box>
  );
}
