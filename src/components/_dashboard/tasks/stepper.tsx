import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Stack,
  useTheme,
  Typography,
  Chip,
  LinearProgress,
  Button,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TelegramIcon from '@mui/icons-material/Telegram';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DownloadIcon from '@mui/icons-material/Download';

export default function StepperMain() {
  const theme = useTheme();
  const steps = [
    { label: 'Join Telegram', step: 'Step 1', icon: <TelegramIcon /> },
    { label: 'Like Post', step: 'Step 2', icon: <ThumbUpAltIcon /> },
    { label: 'Submit', step: 'Step 3', icon: <DownloadIcon /> },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  // Define progress logic
  const getProgressValue = (index: number) => {
    if (index < activeStep) return 100; // Completed steps show 100% progress
    if (index === 1 && activeStep === 1) return 50; // Second step shows 50% when active
    if (index === 1 && activeStep === 2) return 100; // Second step is fully completed when moving to third step
    if (index === activeStep) return activeStep === 0 ? 50 : 100; // First step shows 50%, others show 100% when active
    return 0; // Initially, second progress bar is disabled (0%)
  };

  // Define chip text logic
  const getChipLabel = (index: number) => {
    if (index < activeStep) return 'Complete';
    if (index === activeStep) return 'In Progress';
    return 'Incomplete';
  };

  // Define chip color logic
  const getChipColor = (index: number) => {
    return index === activeStep ? 'primary' : 'secondary';
  };

  return (
    <Box>
      <Card>
        <CardContent>
          <Stack
            direction='row'
            alignItems='center'
            spacing={2}>
            {steps.map((step, index) => (
              <Stack
                key={index}
                direction='row'
                alignItems='center'
                spacing={2}>
                <Box
                  sx={{
                    height: 40,
                    width: 40,
                    borderRadius: '50%',
                    border: '1px solid' + theme.palette.divider,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Box
                    sx={{
                      height: 32,
                      width: 32,
                      borderRadius: '50%',
                      bgcolor:
                        index <= activeStep
                          ? theme.palette.primary.main
                          : '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {index < activeStep ? (
                      <CheckCircleIcon sx={{ color: '#00FF00' }} />
                    ) : (
                      step.icon
                    )}
                  </Box>
                </Box>
                <Stack>
                  <Typography
                    variant='subtitle2'
                    color='text.secondary'>
                    {step.step}
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    color='text.primary'
                    mb={1}>
                    {step.label}
                  </Typography>
                  <Chip
                    variant='outlined'
                    label={getChipLabel(index)}
                    size='small'
                    color={getChipColor(index)}
                  />
                </Stack>

                {/* Conditional rendering for progress bars, skipping the last step */}
                {index !== steps.length - 1 && (
                  <Box sx={{ minWidth: 200 }}>
                    <LinearProgress
                      variant='determinate'
                      value={getProgressValue(index)}
                    />
                  </Box>
                )}
              </Stack>
            ))}
          </Stack>
        </CardContent>
      </Card>
      <Box sx={{ mt: 2 }}>
        <Button
          onClick={handleBack}
          disabled={activeStep === 0}
          variant='contained'
          sx={{ mr: 1 }}>
          Back
        </Button>
        <Button
          onClick={handleNext}
          variant='contained'>
          Next
        </Button>
      </Box>
    </Box>
  );
}
