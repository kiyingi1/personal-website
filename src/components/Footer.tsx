import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import X from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import GitHub from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.primary.main,
        color: 'white',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton
          color="inherit"
          href="mailto:kiyingibrian1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://x.com/UgRazor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <X />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://github.com/kiyingi1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </IconButton>
      </Box>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        © {new Date().toLocaleDateString()} Brian Kiyingi. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer; 