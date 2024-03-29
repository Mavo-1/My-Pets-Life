import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PetsIcon from '@mui/icons-material/Pets';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';

const items = [
  {
    icon: <FitnessCenterIcon />,
    title: 'Activity Tracking',
    description:
      "Keep a log of your pet's daily activities such as feeding, walking, and playtime to monitor their health and behavior patterns.",
  },
  {
    icon: <MedicalServicesIcon />,
    title: 'Medical Records',
    description:
      'Maintain a comprehensive medical history for each pet, including vaccination records, medication schedules, and notes from vet visits to ensure timely and proper care.',
  },
  {
    icon: <MonitorWeightIcon />,
    title: 'Weight Monitoring',
    description:
      "Record your pet's weight over time and track changes to identify trends and potential health issues.",
  },
  {
    icon: <ContentCutIcon />,
    title: 'Grooming Reminders',
    description:
      'Set reminders for grooming tasks such as bathing, brushing, nail trimming, and dental care.',
  },
  {
    icon: <PetsIcon />,
    title: 'Behavioral Tracking',
    description:
      "Monitor your pet's behavior patterns and mood changes, log any unusual behaviors or symptoms.",
  },
  {
    icon: <CalendarMonthIcon />,
    title: 'Nutrition Management',
    description:
    "Track your pet's diet and nutrition preferences, set feeding schedules, and receive alerts for meal times to maintain a balanced and healthy diet.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Your Ultimate Companion
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
          Everything you need to manage your pet's life, right at your fingertips.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
