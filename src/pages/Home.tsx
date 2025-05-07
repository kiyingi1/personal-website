import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const Home = () => {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to My World of Code & Physics
      </Typography>
      
      <Typography variant="h5" color="primary" gutterBottom sx={{ mt: 4 }}>
        Software Developer with a Physics Heart
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mt: 2 }}>
        Hello! I'm a passionate software developer who finds inspiration in the fundamental laws of the universe. 
        My journey in technology is deeply intertwined with my love for physics, allowing me to approach 
        problem-solving with both logical precision and creative curiosity.
      </Typography>

      <Typography variant="body1" paragraph>
        In my work, I combine the elegance of clean code with the beauty of physical principles. Just as physics 
        seeks to understand the underlying patterns of nature, I strive to create software that is both efficient 
        and harmonious.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          What I Do
        </Typography>
        <Typography variant="body1" paragraph>
          • Develop robust and scalable software solutions
          • Apply physics-inspired approaches to complex problems
          • Create intuitive user experiences
          • Continuously learn and explore new technologies
        </Typography>
      </Box>
    </Paper>
  );
};

export default Home; 