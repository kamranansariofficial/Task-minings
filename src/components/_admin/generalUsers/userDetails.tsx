'use client'
import Label from '@/components/label'
import Icon from '@/utils/icon'
import { Avatar, Button, Card, CardContent, CardHeader, Divider, FormControlLabel, IconButton, Link, Stack, Switch, Typography } from '@mui/material'
import React from 'react'
import avatar from '@public/static/db80168cf0d227f0cb2263540138e063.jpeg';
import { useRouter } from 'next/navigation'
function UserDetails() {
  const router = useRouter();
  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value)
      .then(() => {
        alert('Copied to clipboard successfully!');
      })
      .catch((error) => {
        console.error('Failed to copy: ', error);
      });
  }
  return (
    <>
      <Card>
        <CardHeader
          sx={{
            padding: { xs: 1, md: 3 },
            pb: { md: 0 },
            '.MuiCardHeader-action': {
              margin: 0,
              alignSelf: 'center',
              position: { xs: 'absolute', md: 'relative' },
              right: { xs: 12, md: 'auto' },
              top: { xs: 12, md: 'auto' },



            }
          }}
          subheader={
            <Stack spacing={1} alignItems='flex-start'>
              <Button
                onClick={() => router.back()}
                startIcon={<Icon name="ic-arrow-left" />} color='inherit'>
                Back
              </Button>
              <Stack spacing={1}>
                <Stack direction='row' alignItems='center' spacing={1.5}>
                  <Avatar
                    alt="avatar"
                    sx={{ width: 84, height: 84 }}
                    src={avatar.src}

                  />
                  <Stack>
                    <Stack direction='row' alignItems='center' spacing={1}>
                      <Typography color="text.primary" fontWeight={700} variant='h5'>Hailey Patrick</Typography>
                      <Label color='error' sx={{ height: 30 }}>Pending</Label>
                    </Stack>

                    <Typography variant='body1' fontWeight={600} color='text.secondary'>
                      Team Manager
                    </Typography>
                    <Typography>
                      California, United State
                    </Typography>
                  </Stack>
                </Stack>

              </Stack>
            </Stack>
          }
          action={
            <FormControlLabel
              sx={{

                '.MuiFormControlLabel-label': {
                  fontWeight: 600,
                  color: 'text.secondary'
                }

              }}
              value="start"
              control={<Switch color="primary" />}
              label="Disable"
              labelPlacement="start"
            />
          }

        />
        <Divider sx={{ maxWidth: '95%', margin: 'auto', mt: 1 }} />
        <CardContent sx={{ padding: { xs: 1, md: 3 }, pt: { xs: 3 } }}>
          <Stack
            sx={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(2, minmax(0, 1fr))',

              gap: 3,
            }}
          >
            <Stack spacing={.7}>
              <Typography variant='body2' fontWeight={700} color="text.secondary">
                First Name
              </Typography>
              <Typography>Hailey</Typography>
            </Stack>
            <Stack spacing={.7}>
              <Typography variant='body2' fontWeight={700} color="text.secondary">
                Last Name
              </Typography>
              <Typography>Patrick</Typography>
            </Stack>
            <Stack spacing={.7}>
              <Typography variant='body2' fontWeight={700} color="text.secondary">
                Gender
              </Typography>
              <Typography>Male</Typography>
            </Stack>
            <Stack spacing={.7}>
              <Typography variant='body2' fontWeight={700} color="text.secondary">
                Date of birth
              </Typography>
              <Typography>04 April 1990</Typography>
            </Stack>
            <Stack spacing={.7}>
              <Typography variant='body2' fontWeight={700} color="text.secondary">
                Country
              </Typography>
              <Typography>USA</Typography>
            </Stack>
            <Stack spacing={.7}>
              <Typography variant='body2' fontWeight={700} color="text.secondary">
                Language
              </Typography>
              <Typography>English</Typography>
            </Stack>
            <Stack spacing={.7}>
              <Typography variant='body2' fontWeight={700} color="text.secondary">
                Email
              </Typography>
              <Typography>hailey@taskminig.com</Typography>
            </Stack>
            <Stack spacing={.7}>
              <Typography variant='body2' fontWeight={700} color="text.secondary">
                Mobile number
              </Typography>
              <Typography>+234 0000 000 0000</Typography>
            </Stack>
            <Stack spacing={.7}>
              <Typography variant='body2' fontWeight={700} color="text.secondary">
                Application Date
              </Typography>
              <Typography>30 Jun, 2024</Typography>
            </Stack>
          </Stack>

        </CardContent>

        <CardContent sx={{ padding: { xs: 1, md: 3 }, pt: { xs: 3 } }}>
          <Divider />

          <Stack spacing={{ xs: 3, sm: 2 }} mt={3}>
            {[
              { name: "Discord", href: "https://discord.com/", icon: 'ic-discord' },
              { name: "Instagram", href: "https://www.facebook.com/", icon: 'ic-insta' },
              { name: "Twitter", href: "https://x.com/?lang=en", icon: 'ic-x-social' },
              { name: "Telegram", href: "https://desktop.telegram.org/", icon: 'ic-telegram' },
            ].map((item, idx) =>
              <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={{ xs: 1, sm: 2 }} key={idx}>
                <Stack direction='row' alignItems='center' spacing={1}>
                  <Icon name={item.icon} />
                  <Typography variant='body2' fontWeight={700} color='text.primary'>
                    {item.name}:
                  </Typography>
                </Stack>
                <Stack direction='row' alignItems='center' spacing={.5}>
                  <Link target="_blank" color="primary" fontSize={14} href={item.href}>{item.href}</Link>
                  <IconButton size='small' onClick={() => handleCopy(item.href)}>
                    <Icon name="ic-file-copy" />
                  </IconButton>
                  <IconButton size='small'>
                    <Icon name="ic-pencil-edit" />
                  </IconButton>
                </Stack>
              </Stack>
            )}
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default UserDetails