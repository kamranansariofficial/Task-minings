import React from 'react';
import {
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
  Button,
  useTheme,
  Stack,
  useMediaQuery,
  IconButton,
} from '@mui/material';
// icon
import { TbLink } from 'react-icons/tb';

export default function ReferFriend() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card>
      <CardContent>
        <Stack spacing={{ xs: 1, md: 3 }}>
          <Typography
            variant='h4'
            gutterBottom>
            Refer a friend
          </Typography>
          <Typography
            variant='body1'
            color='text.secondary'>
            Lorem ipsum dolor sit amet consectetur. Pellentesque risus laoreet
            egestas est nisl
          </Typography>
          <TextField
            fullWidth
            placeholder='233546dfkj xlspkcxock346djf23ldodk'
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position={isMobile ? 'start' : 'end'}>
                    {isMobile ? (
                      <IconButton color='primary'>
                        <TbLink size={24} />
                      </IconButton>
                    ) : (
                      <Button
                        size='large'
                        variant='contained'
                        color='primary'
                        sx={{
                          borderRadius: '0px 8px  8px 0px',
                          px: 5,
                        }}
                        startIcon={<TbLink />}>
                        Copy
                      </Button>
                    )}
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              pt: 1,
              '& .MuiInputBase-root': {
                bgcolor: theme.palette.grey[200],
                pr: 0,
                input: {
                  p: '12.5px 14px',
                },
                fieldset: {
                  display: 'none',
                },
              },
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
