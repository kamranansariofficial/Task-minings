'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import UserDashboardAppbar from './topbar';
import UserDashboardSidebar from './sidebar';
import { Toolbar } from '@mui/material';

const drawerWidth = 250;

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

export default function UserDashboardLayout(props: Props) {
  const { children, window } = props;
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

  return (
    <Box sx={{ display: 'flex' }}>
      <UserDashboardAppbar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <UserDashboardSidebar
        drawerWidth={drawerWidth}
        container={container}
        mobileOpen={mobileOpen}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        handleDrawerClose={handleDrawerClose}
      />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 4.5 },
          pt: 0 + '!important',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}>
        <Toolbar />
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

UserDashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
  window: PropTypes.func,
};
