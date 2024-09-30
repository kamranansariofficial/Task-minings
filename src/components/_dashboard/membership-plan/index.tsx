'use client';
import React from 'react';
// mui
import {
  alpha,
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  useTheme,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import BadgeImg from '@public/static/gold-medal.png';
// icons
import { FaCheck } from 'react-icons/fa6';
import { PiWarningFill } from 'react-icons/pi';

import CloseIcon from '@mui/icons-material/Close';

export default function MembershipPlan() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Card>
        <CardContent>
          <Grid
            container
            spacing={2}>
            <Grid
              item
              xs={12}
              md={6}>
              <Box
                sx={{
                  borderRadius: 2,
                  height: 425,
                  bgcolor: alpha(theme.palette.primary.main, 0.2),
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Stack
                  justifyContent='center'
                  alignItems='center'
                  textAlign='center'
                  spacing={2}>
                  <Box
                    sx={{
                      position: 'relative',
                      height: 100,
                      width: 100,
                    }}>
                    <Image
                      src={BadgeImg}
                      priority
                      alt='gold-medal'
                      fill
                      objectFit='contain'
                    />
                  </Box>
                  <Typography
                    variant='h5'
                    fontWeight={400}>
                    One time purchase{' '}
                  </Typography>
                  <Typography variant='h3'>
                    <Typography
                      variant='subtitle1'
                      component='span'>
                      $
                    </Typography>{' '}
                    100
                  </Typography>
                  <Typography variant='h6'>Perfect for All users</Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}>
              <List
                sx={{
                  mb: 4,
                }}>
                {[
                  'Unlimited access to yoga classes',
                  '24/7 Gym access',
                  'Use of locker & showers',
                  'Unlimited access to yoga classes',
                  'Use of locker & showers',
                  'Use of locker & showers',
                ].map((item) => (
                  <ListItem key={Math.random()}>
                    <ListItemIcon
                      sx={{
                        minWidth: 25,
                        color: 'text.primary',
                      }}>
                      <FaCheck />
                    </ListItemIcon>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                ))}
              </List>
              <Button
                onClick={handleClickOpen}
                fullWidth
                variant='contained'
                color='primary'>
                Select
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: 4,
            maxWidth: 350,
          },
        }}>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 4,
            top: 4,
            color: theme.palette.grey[500],
          })}>
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ p: { xs: 2, md: 4 } }}>
          <Stack
            alignItems='center'
            width={1}
            spacing={2}>
            <IconButton
              sx={{
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                minWidth: 64,
                minHeight: 64,
              }}
              color='primary'>
              <PiWarningFill size={24} />
            </IconButton>
            <Typography
              color='text.primary'
              variant='h4'
              textAlign='center'>
              Alert!
            </Typography>
            <Typography
              color='text.secondary'
              textAlign='center'
              pb={1}>
              Please complete your profile first.
            </Typography>
            <Button
              fullWidth
              variant='contained'
              color='primary'
              onClick={handleClose}>
              ok
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
