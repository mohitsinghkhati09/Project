import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // For a "Go to Home" or "Try Again" button
import EngineeringIcon from '@mui/icons-material/Engineering'; // Icon for maintenance/construction
import HomeIcon from '@mui/icons-material/Home'; // Or RefreshIcon if you want a "Try Again"
import RefreshIcon from '@mui/icons-material/Refresh';

export default function MaintenancePage() {
  // Optional: Handler for a "Try Again" button if relevant
  const handleTryAgain = () => {
    window.location.reload(); // Simple reload
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 64px)', // Adjust if you have a footer, or set to '100vh' for full screen
        textAlign: 'center',
        py: { xs: 4, md: 8 },
        backgroundColor: 'grey.100', // A neutral background for maintenance
      }}
    >
      <Container maxWidth="md"> {/* Increased maxWidth slightly for more content */}
        <Paper
          elevation={0} // Less emphasis, more informational
          sx={{
            p: { xs: 3, sm: 6 }, // More padding
            borderRadius: 3,    // Softer corners
            border: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'background.paper', // Standard paper background
          }}
        >
          <EngineeringIcon
            sx={{
              fontSize: { xs: '4.5rem', sm: '6.5rem' }, // Slightly larger icon
              color: 'primary.main', // Using primary color, or a more neutral one like 'text.secondary'
              mb: 3,
            }}
          />
          <Typography
            variant="h3" // Adjusted from h1 for a less "error" feel
            component="h1"
            sx={{
              fontWeight: 'bold',
              color: 'text.primary',
              mb: 2,
            }}
          >
            Site Under Maintenance
          </Typography>
          <Typography
            variant="h6" // Adjusted from h5
            component="h2"
            color="text.secondary"
            sx={{
              fontWeight: 'medium',
              mb: 3,
              maxWidth: '600px', // Limit width for readability
            }}
          >
            We're working hard to improve your experience!
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{ mb: 4, maxWidth: '700px', lineHeight: 1.7 }}
          >
            Our website is currently undergoing scheduled maintenance to bring you
            new features and a better service. We apologize for any inconvenience
            this may cause and appreciate your patience.
            <br /><br />
            We expect to be back online shortly. Please try again later.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button
              // component={RouterLink} // If you have a status page or contact page
              // to="/contact-us"
              onClick={handleTryAgain} // Or remove if not needed
              variant="contained"
              color="primary"
              size="large"
              startIcon={<RefreshIcon />}
              sx={{
                borderRadius: '20px',
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
              }}
            >
              Try Again Later
            </Button>
            <Button
              component={RouterLink}
              to="/" // Or a relevant "status" page if you have one
              variant="outlined"
              color="secondary"
              size="large"
              startIcon={<HomeIcon />}
              sx={{
                borderRadius: '20px',
                px: 4,
                py: 1.5,
              }}
            >
              Go to Homepage
            </Button>
          </Box>
          {/* Optional: Add contact information or social media links */}
          <Typography variant="caption" color="text.disabled" sx={{ mt: 4 }}>
            If you need urgent assistance, please contact support at [your support email/phone].
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}