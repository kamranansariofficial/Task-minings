'use client';
import React from 'react';
// mui
import {
  Box,
  Card,
  Stack,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  IconButton,
  useTheme,
  alpha,
} from '@mui/material';
import Icon from '@/utils/icon';
import { LuDot } from 'react-icons/lu';

export default function Notifications() {
  const theme = useTheme();

  const data = [
    {
      icon: 'notifications',
      color: theme.palette.primary.main,
      title: 'Task ID 12255 is approved, you can claim your rewards.',
      date: 'Monday, 06 May 2024',
      time: '2m ago',
    },
    {
      icon: 'trophy',
      color: theme.palette.secondary.main,
      unread: true,
      title:
        'ID 1245 is successfully joined task mining with your referral code, claim your rewards.',
      date: 'Monday, 06 May 2024',
      time: '4m ago',
    },
    {
      icon: 'notifications',
      color: theme.palette.primary.main,
      title:
        'ID 1245 is successfully joined task mining with your referral code, claim your rewards.',
      date: 'Monday, 06 May 2024',
      time: '2m ago',
      isDate: '28 july',
    },
    {
      icon: 'cancel',
      color: theme.palette.error.main,
      title: 'Task ID 12255 is approved, you can claim your rewards.',
      date: 'Monday, 06 May 2024',
      time: '1day ago',
    },
    {
      icon: 'notifications',
      color: theme.palette.primary.main,
      title:
        'ID 1245 is successfully joined task mining with your referral code, claim your rewards.',
      date: 'Monday, 06 May 2024',
      time: '1day ago',
    },
    {
      icon: 'trophy',
      color: theme.palette.secondary.main,
      title: 'Task ID 12255 is approved, you can claim your rewards.',
      date: 'Monday, 06 May 2024',
      time: '2m ago',
    },
    {
      icon: 'notifications',
      color: theme.palette.primary.main,
      title:
        'ID 1245 is successfully joined task mining with your referral code, claim your rewards.',
      date: 'Monday, 06 May 2024',
      time: '2m ago',
    },
  ];

  const HighlightText = ({ text }: { text: string }) => {
    const parts = text.split(/(ID \d+|successfully|claim your rewards)/g); // Split text by "ID <number>" and "successfully"

    return (
      <Typography
        variant='body1'
        fontSize={{ xs: 14, md: 18 }}
        color='text.secondary'>
        {parts.map((part, index) =>
          /ID \d+|successfully|claim your rewards/.test(part) ? (
            <Box
              component='span'
              fontWeight='bold'
              color='text.primary'
              key={index}>
              {part}
            </Box>
          ) : (
            <Box
              component='span'
              key={index}>
              {part}
            </Box>
          )
        )}
      </Typography>
    );
  };

  return (
    <Box>
      <Card>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          spacing={2}
          sx={{
            p: { xs: 2, md: 3 },
          }}>
          <Typography
            variant='h5'
            fontWeight={500}>
            Today
          </Typography>
          <Button
            variant='text'
            color='primary'
            size='small'>
            Mark all as read
          </Button>
        </Stack>
        <Divider />
        <List
          sx={{
            py: 0,
            li: {
              '& .MuiButtonBase-root': {
                p: { xs: 2, md: 3 },
              },
            },
          }}>
          {data.map((item) => (
            <React.Fragment key={Math.random()}>
              {item.isDate ? (
                <ListItem
                  sx={{
                    borderBottom: '1px solid' + theme.palette.divider,
                    p: { xs: 2, md: 3 },
                    '&:last-child': {
                      borderBottom: 'none', // Remove borderBottom for the last item
                    },
                  }}>
                  <Typography
                    variant='h5'
                    fontWeight={500}>
                    {item.isDate}
                  </Typography>
                </ListItem>
              ) : (
                <ListItem
                  sx={{
                    borderBottom: '1px solid' + theme.palette.divider,
                    p: 0,
                    '&:last-child': {
                      borderBottom: 'none', // Remove borderBottom for the last item
                    },
                  }}>
                  <ListItemButton
                    sx={{
                      bgcolor: item.unread
                        ? alpha(theme.palette.primary.main, 0.1)
                        : 'transparent',
                    }}>
                    <Stack
                      direction='row'
                      alignItems='start'
                      justifyContent='space-between'
                      width='100%'>
                      <Stack
                        direction='row'
                        alignItems={{ xs: 'start', md: 'center' }}
                        spacing={2}>
                        <Stack
                          direction='row'
                          alignItems='center'
                          spacing={0.1}
                          sx={{
                            ml: item.unread ? '-20px !important' : 0,
                            svg: {
                              color: 'primary.main',
                            },
                          }}>
                          {item.unread && <LuDot size={24} />}
                          <IconButton
                            sx={{
                              bgcolor: alpha(item.color, 0.2),
                              height: { xs: 44, md: 54 },
                              width: { xs: 44, md: 54 },
                              minWidth: { xs: 44, md: 54 },
                            }}>
                            <Icon name={item.icon} />
                          </IconButton>
                        </Stack>
                        <Stack spacing={1}>
                          <HighlightText text={item.title} />
                          <Typography
                            variant='body2'
                            color='text.secondary'>
                            {item.date}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Typography
                        variant='body2'
                        sx={{
                          display: { xs: 'none', md: 'block' },
                        }}>
                        {item.time}
                      </Typography>
                    </Stack>
                  </ListItemButton>
                </ListItem>
              )}
            </React.Fragment>
          ))}
        </List>
      </Card>
    </Box>
  );
}
