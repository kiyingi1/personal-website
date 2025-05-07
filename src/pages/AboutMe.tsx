import React from 'react';
import { Typography, Paper, Box, Avatar } from '@mui/material';

const AboutMe = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
      <Box sx={{ width: { xs: '100%', md: '33%' } }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box display="flex" justifyContent="center" mb={3}>
            <Avatar
              alt="Profile Picture"
              src={process.env.PUBLIC_URL + "/profile-placeholder.jpg"}
              sx={{ width: 200, height: 200 }}
            />
          </Box>
          <Typography variant="h5" align="center" gutterBottom>
            Software Developer & Physics Enthusiast
          </Typography>
        </Paper>
      </Box>

      <Box sx={{ width: { xs: '100%', md: '67%' } }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h3" gutterBottom>About Me</Typography>
          <Typography variant="body1" paragraph>
            Hello! I'm a passionate software developer who finds inspiration in the fundamental laws of the universe. 
            My journey in technology is deeply intertwined with my love for physics.
          </Typography>
          <Typography variant="h5" gutterBottom>My Skills</Typography>
          <Typography variant="body1" paragraph>
            • Full-stack development
            • Problem-solving with physics-inspired approaches
            • Clean code architecture
            • Modern web technologies
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default AboutMe; 