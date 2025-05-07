import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button, Box } from '@mui/material';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import FunFacts from './pages/FunFacts';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Brian's Bio
            </Typography>
            <Button color="inherit" component={Link} to="/">About Me</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <Button color="inherit" component={Link} to="/funfacts">Fun Facts</Button>
          </Toolbar>
        </AppBar>
        
        <Container sx={{ mt: 4, flex: 1 }}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/funfacts" element={<FunFacts />} />
          </Routes>
        </Container>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
