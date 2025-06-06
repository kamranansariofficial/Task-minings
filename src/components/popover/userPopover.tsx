import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { alpha, Avatar, Box, Stack, useTheme } from '@mui/material';
// mui
import ArrowDropDownIcon from '../../../public/static/icons/Vector.svg';
import LogOutIcon from '../../../public/static/icons/logout-04.svg';
import UserIcon from '../../../public/static/icons/user.svg';
import AvatarIcon from '../../../public/static/avatar.png';
import Image from 'next/image';
import { useRouter } from 'next-nprogress-bar';

export default function UserPopover() {
  const theme = useTheme();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Stack
        aria-describedby={id}
        onClick={handleClick}
        component={Button}
        color='inherit'
        direction='row'
        alignItems='center'
        spacing={1}
        sx={{
          minWidth: { xs: 50, md: 180 },
          p: 0,
        }}>
        <Box
          sx={{
            position: 'relative',
            height: { xs: 28, md: 43 },
            width: { xs: 28, md: 43 },
          }}>
          <Image
            src={AvatarIcon}
            alt='logo'
            fill
            objectFit='cover'
          />
        </Box>
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
          }}>
          <ArrowDropDownIcon />
        </Box>
        <Stack
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}>
          <Typography
            variant='subtitle2'
            color='text.primary'
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}>
            Annette Black
            <ArrowDropDownIcon />
          </Typography>
          <Typography
            variant='body2'
            color='primary'
            sx={{
              px: 1,
              maxWidth: 90,
              fontWeight: 600,
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              borderRadius: 1,
            }}>
            Activated
          </Typography>
        </Stack>
      </Stack>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          '.MuiPaper-root': {
            border: '1px solid' + theme.palette.divider,
            borderRadius: 2,
            boxShadow: '2px 4px 26.8px 0px #3F80FF14',
            p: 1,
            minWidth: 180,
          },
        }}>
        <Stack spacing={1}>
          <Button
            variant='text'
            color='inherit'
            startIcon={<UserIcon />}
            onClick={() => router.push('/dashboard/settings/profile')}
            sx={{
              justifyContent: 'start',
              color: 'text.secondary',
              fontWeight: 400,
              minHeight: 39,
            }}>
            Profile
          </Button>
          <Button
            variant='text'
            color='error'
            startIcon={<LogOutIcon />}
            sx={{
              justifyContent: 'start',
              fontWeight: 400,
              minHeight: 39,
            }}>
            Log out
          </Button>
        </Stack>
      </Popover>
    </div>
  );
}
