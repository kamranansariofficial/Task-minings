import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

// mui
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

const RootStyle = styled('div')({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
});

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));

// ----------------------------------------------------------------------

interface ScrollbarProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  [key: string]: any; // To allow other props like `timeout`, `clickOnTrack`, etc.
}

export default function Scrollbar({ children, sx, ...other }: ScrollbarProps) {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    return (
      <Box
        sx={{ overflowX: 'auto', ...sx }}
        {...other}>
        {children}
      </Box>
    );
  }

  return (
    <RootStyle>
      <SimpleBarStyle
        // timeout={500 as number}
        clickOnTrack={false}
        sx={sx}
        {...other}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
}
