import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { alpha, Avatar, Stack, useTheme } from '@mui/material';
// mui
import ArrowDropDownIcon from '../../../public/static/icons/Vector.svg';
import LogOutIcon from '../../../public/static/icons/logout-04.svg';
import UserIcon from '../../../public/static/icons/user.svg';
import AvatarIcon from '../../../public/static/avatar.png';
import Image from 'next/image';

export default function UserPopover() {
  const theme = useTheme();
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
          minWidth: 180,
        }}>
        <Image
          src={AvatarIcon}
          alt='logo'
          width={43}
          height={43}
          layout='fixed'
          objectFit='cover'
        />
        <Stack>
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
              width: 70,
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
