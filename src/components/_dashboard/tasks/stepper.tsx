import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Stack,
  useTheme,
  Typography,
  Chip,
  Button,
  styled,
} from '@mui/material';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TelegramIcon from '@mui/icons-material/Telegram';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DownloadIcon from '@mui/icons-material/Download';
import Icon from '@/utils/icon';
import TelegramJoinCard from '@/components/cards/telegramJoin';
import LikePostCard from '@/components/cards/likePost';
import UploadSingleFile from '@/components/upload/UploadSingleFile';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  width: '100%',
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[500],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.primary.main,
    }),
  },
}));

export default function StepperMain() {
  const theme = useTheme();
  const steps = [
    { label: 'Join Telegram', step: 'Step 1', icon: 'telegram' },
    { label: 'Like Post', step: 'Step 2', icon: 'thumbs-up' },
    { label: 'Submit', step: 'Step 3', icon: 'upload-03' },
  ];
  const [file, setFile] = useState<any>(null);
  const [loading, setLoading] = useState<number | boolean>(false); // Handles percentage or false when done

  const handleDrop = async (acceptedFiles: any) => {
    setLoading(2); // Indicating initial loading state
    const droppedFile = acceptedFiles[0];
    if (droppedFile) {
      const preview = URL.createObjectURL(droppedFile);
      setFile({ ...droppedFile, preview }); // Save the file and its preview
    }

    // Simulate upload progress for local state
    let percentage = 0;
    const uploadInterval = setInterval(() => {
      percentage += 10; // Increment progress by 10%
      setLoading(percentage);
      if (percentage >= 100) {
        clearInterval(uploadInterval);
        setLoading(false); // Done loading
      }
    }, 200); // Simulating every 200ms
  };
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
    return index <= activeStep ? 'primary' : 'secondary';
  };

  return (
    <Box>
      <Card>
        <CardContent>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='center'
            spacing={{ xs: 0.5, md: 4 }}>
            {steps.map((step, index) => (
              <Stack
                key={index}
                direction='row'
                alignItems='center'
                spacing={{ xs: 0.5, md: 3 }}>
                <Box
                  sx={{
                    height: { xs: 32, md: 40 },
                    width: { xs: 32, md: 40 },
                    borderRadius: '50%',
                    border:
                      index < activeStep
                        ? '1px solid transparent'
                        : '1px solid' + theme.palette.divider,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Box
                    sx={{
                      height: { xs: 24, md: 32 },
                      width: { xs: 24, md: 32 },
                      borderRadius: '50%',
                      bgcolor:
                        index <= activeStep
                          ? theme.palette.primary.main
                          : theme.palette.background.paper,
                      color:
                        index <= activeStep
                          ? theme.palette.common.white
                          : theme.palette.text.secondary,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {index < activeStep ? (
                      <Icon name='check' />
                    ) : (
                      <Icon name={step.icon} />
                    )}
                  </Box>
                </Box>
                <Stack
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    minWidth: 120,
                  }}>
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
                    sx={{
                      maxWidth: 90,
                      width: '100%',
                      fontSize: 12,
                      color:
                        index <= activeStep ? 'primary.main' : 'text.secondary',
                      borderColor:
                        index <= activeStep
                          ? theme.palette.primary.main
                          : theme.palette.divider,
                    }}
                  />
                </Stack>

                {index !== steps.length - 1 && (
                  <Box sx={{ minWidth: { xs: 70, sm: 90, md: 200 } }}>
                    <BorderLinearProgress
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
      <Box my={2}>
        {activeStep === 0 ? (
          <TelegramJoinCard handleNext={handleNext} />
        ) : activeStep === 1 ? (
          <LikePostCard handleNext={handleNext} />
        ) : (
          <Card>
            <CardContent>
              <Stack
                justifyContent='center'
                alignItems='center'
                spacing={2}
                my={4}>
                <Typography variant='h5'>Submit Screenshot</Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  textAlign='center'
                  sx={{
                    maxWidth: 450,
                    pb: 1,
                  }}>
                  Submit your screenshot here for a chance to be featured!
                </Typography>
                <UploadSingleFile
                  id='cover-upload'
                  file={file}
                  onDrop={(acceptedFiles: any) => handleDrop(acceptedFiles)}
                  accept='image/*'
                  loading={loading} // Show loading progress
                />
                <Box pt={1}>
                  <Button
                    onClick={handleNext}
                    variant='contained'
                    color='primary'>
                    submit
                  </Button>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
}
