'use client';
import React from 'react';
// mui
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Button,
} from '@mui/material';

export default function SupportDetails() {
  return (
    <Card>
      <CardContent>
        <Typography
          variant='h6'
          mb={2}>
          Write what you want to know?
        </Typography>
        <TextField
          fullWidth
          placeholder='write here...'
          multiline
          rows={10}
        />
        <Box
          sx={{
            mt: 2,
            textAlign: 'right',
          }}>
          <Button
            variant='contained'
            color='primary'>
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
