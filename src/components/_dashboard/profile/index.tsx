'use client';
import React, { useState } from 'react';
// components
import ProfileForm from '@/components/forms/profile';
// mui
import {
  Box,
  Card,
  CardContent,
  Stack,
  IconButton,
  Typography,
  Button,
  Dialog,
  DialogContent,
  Divider,
  TextField,
  useTheme,
  useMediaQuery,
} from '@mui/material';
// icons
import CloseIcon from '@mui/icons-material/Close';
import { MdOutlineEdit } from 'react-icons/md';
import { FaDiscord, FaInstagram, FaTwitter, FaTelegram } from 'react-icons/fa';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { FaCircleCheck } from 'react-icons/fa6';

const initialData = [
  {
    name: 'Discord',
    icon: <FaDiscord size={24} />,
    active: false, // Add active status
  },
  {
    name: 'Instagram',
    icon: <FaInstagram size={24} />,
    active: false, // Add active status
  },
  {
    name: 'Twitter',
    icon: <FaTwitter size={24} />,
    active: false, // Add active status
  },
  {
    name: 'Telegram',
    icon: <FaTelegram size={24} />,
    active: false, // Add active status
  },
];

export default function ProfileComponent() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedSocial, setSelectedSocial] = useState<number | null>(null);
  const [socials, setSocials] = useState(initialData);
  const [accountName, setAccountName] = useState('');
  const [accountLink, setAccountLink] = useState('');

  const handleClickOpen = (index: number) => {
    setSelectedSocial(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAccountName('');
    setAccountLink('');
    setSelectedSocial(null);
  };

  const handleUpdate = () => {
    if (selectedSocial !== null) {
      const updatedSocials = socials.map((social, index) => {
        if (index === selectedSocial) {
          return { ...social, active: true }; // Activate the selected social
        }
        return social;
      });
      setSocials(updatedSocials);
      handleClose();
    }
  };

  return (
    <Box position='relative'>
      <ProfileForm />
      <Card sx={{ mt: 3 }}>
        <CardContent
          sx={{
            px: { xs: 2, md: 3 },
          }}>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            mb={2}
            sx={{
              width: '100%',
            }}>
            <Typography variant='h5'>Social networks</Typography>
            <IconButton color='inherit'>
              <MdOutlineEdit />
            </IconButton>
          </Stack>
          <Stack
            direction='row'
            alignItems='center'
            spacing={{ xs: 1, md: 2 }}>
            {socials.map((item, index) => (
              <Button
                key={index}
                size='large'
                variant={'outlined'} // Change style when active
                fullWidth
                color={item.active ? 'primary' : 'inherit'} // Change color when active
                startIcon={isMobile ? null : item.icon}
                onClick={() => handleClickOpen(index)}
                sx={{
                  position: 'relative',
                  maxWidth: { xs: 30, sm: '100%' },
                }}>
                {item.active && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -10,
                      right: -5,
                    }}>
                    <FaCircleCheck />
                  </Box>
                )}

                {isMobile ? item.icon : item.name}
              </Button>
            ))}
          </Stack>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='sm'
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
          },
        }}>
        <DialogContent>
          <Stack
            alignItems='center'
            direction='row'
            justifyContent='space-between'
            pb={2}>
            <Typography
              color='text.primary'
              variant='h5'
              textAlign='center'>
              {selectedSocial !== null && socials[selectedSocial].name} Account
            </Typography>
            <IconButton
              aria-label='close'
              onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            spacing={2}
            mt={3}>
            <Stack
              gap={0.5}
              width={1}>
              <Typography
                variant='overline'
                color='text.primary'
                component={'label'}>
                Account Name:
              </Typography>
              <TextField
                fullWidth
                size='small'
                type='text'
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
            </Stack>
            <Stack
              gap={0.5}
              width={1}>
              <Typography
                variant='overline'
                color='text.primary'
                component={'label'}>
                Account Link:
              </Typography>
              <TextField
                fullWidth
                size='small'
                type='text'
                value={accountLink}
                onChange={(e) => setAccountLink(e.target.value)}
              />
            </Stack>
          </Stack>
          <Stack
            direction='row'
            justifyContent='flex-end'
            spacing={2}
            mt={3}>
            <Button
              size='small'
              sx={{ color: 'text.secondary', width: { xs: 1, sm: 'auto' } }}
              startIcon={<CancelOutlinedIcon />}
              variant='contained'
              color='inherit'
              onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type='submit'
              size='small'
              onClick={handleUpdate} // Call update function
              sx={{ width: { xs: 1, sm: 'auto' } }}
              startIcon={<SaveOutlinedIcon />}
              variant='contained'>
              Update
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
