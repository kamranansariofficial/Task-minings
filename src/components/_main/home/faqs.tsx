'use client';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// icons
import { FaMinus } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa6';
import { Box, Container } from '@mui/material';
import { darkMode } from '@/lib/redux';
import { useSelector } from 'react-redux';

const faqs = [
  {
    question: 'What products does Task Minings provide?',
    answer:
      'Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Task Minings exchange is the largest crypto exchange by trade volume.',
  },
  {
    question: 'What products does Task Minings provide?',
    answer:
      'Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Task Minings exchange is the largest crypto exchange by trade volume.',
  },
  {
    question: 'What products does Task Minings provide?',
    answer:
      'Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Task Minings exchange is the largest crypto exchange by trade volume.',
  },
  {
    question: 'What products does Task Minings provide?',
    answer:
      'Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Task Minings exchange is the largest crypto exchange by trade volume.',
  },
];

export default function MainFaqs() {
  const isDarkMode = useSelector(darkMode);
  const [expanded, setExpanded] = React.useState<number | false>(0);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 2, md: 6 },
        overflow: 'hidden',
        '::before': {
          content: "''",
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          right: 0,
          background: 'url(/static/bgCenter.png)',
          height: { xs: 250, md: 450 },
          width: { xs: 250, md: 450 },
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        },
        '::after': {
          content: "''",
          position: 'absolute',
          bottom: 0,
          left: 0,
          background: 'url(/static/bgLeft.png)',
          height: { xs: 250, md: 450 },
          width: { xs: 250, md: 450 },
          backgroundPosition: 'bottom left',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        },
      }}>
      <Box
        sx={{
          position: 'relative',
          '::before': {
            content: "''",
            position: 'absolute',
            top: '10%',
            right: 0,
            background: 'url(/static/bgRight.png)',
            height: { xs: 250, md: 450 },
            width: { xs: 250, md: 450 },
            backgroundPosition: 'right center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          },
          '::after': {
            content: "''",
            position: 'absolute',
            top: { xs: '-5%', md: '-10%' },
            left: '40%',
            transform: 'translateX(-50%)',
            background: 'url(/static/bgCenter.png)',
            height: { xs: 250, md: 450 },
            width: { xs: 250, md: 450 },
            backgroundPosition: 'bottom center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          },
        }}>
        <Container>
          <Stack
            spacing={4}
            sx={{
              position: 'relative',
              zIndex: 3,
            }}>
            <Typography
              variant='h3'
              color='text.primary'
              textAlign='center'
              textTransform='uppercase'>
              Frequently Asked Questions
            </Typography>

            <div>
              {faqs.map((item, i) => (
                <Accordion
                  key={Math.random()}
                  expanded={expanded === i}
                  onChange={handleChange(i)}
                  sx={{
                    border: (theme) =>
                      '1px solid ' + theme.palette.divider + '!important',
                    boxShadow: 'none',
                    borderRadius: '12px !important',
                    mb: 2,
                    p: 1,
                    background: isDarkMode
                      ? 'linear-gradient(177.68deg, #292929 1.66%, #2F2F2F 97.76%)'
                      : ' linear-gradient(177.68deg, #FFFFFF 1.66%, #F1F1F1 97.76%)',
                    '::before': {
                      display: 'none',
                    },
                  }}>
                  <AccordionSummary
                    expandIcon={expanded === i ? <FaPlus /> : <FaMinus />}
                    aria-controls='panel1-content'
                    id='panel1-header'>
                    <Typography
                      variant='subtitle1'
                      fontSize={{ xs: 14, md: 20 }}
                      fontWeight={600}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      color: 'text.secondary',
                    }}>
                    {item.answer}
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
