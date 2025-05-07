import React, { useState, useEffect } from 'react';
import {
  Typography,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Snackbar,
  Alert
} from '@mui/material';
import { getFunFacts, submitFunFact } from '../services/api';

interface FunFact {
  _id: string;
  fact: string;
  author: string;
  createdAt: string;
}

const FunFacts = () => {
  const [facts, setFacts] = useState<FunFact[]>([]);
  const [formData, setFormData] = useState({
    fact: '',
    author: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  useEffect(() => {
    fetchFacts();
  }, []);

  const fetchFacts = async () => {
    try {
      const data = await getFunFacts();
      setFacts(data);
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error fetching fun facts',
        severity: 'error'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fact) newErrors.fact = 'Fact is required';
    if (!formData.author) newErrors.author = 'Author name is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await submitFunFact(formData);
      setFormData({ fact: '', author: '' });
      fetchFacts();
      setSnackbar({
        open: true,
        message: 'Fun fact added successfully!',
        severity: 'success'
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error adding fun fact',
        severity: 'error'
      });
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Share a Fun Fact
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Fun Fact"
            name="fact"
            multiline
            rows={2}
            value={formData.fact}
            onChange={handleChange}
            error={!!errors.fact}
            helperText={errors.fact}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Your Name"
            name="author"
            value={formData.author}
            onChange={handleChange}
            error={!!errors.author}
            helperText={errors.author}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Submit Fun Fact
          </Button>
        </form>
      </Paper>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Recent Fun Facts
        </Typography>
        <List>
          {facts.map((fact) => (
            <ListItem key={fact._id} divider>
              <ListItemText
                primary={fact.fact}
                secondary={`By ${fact.author} on ${new Date(fact.createdAt).toLocaleDateString()}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      >
        <Alert
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FunFacts; 