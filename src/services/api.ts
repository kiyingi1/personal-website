const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const submitContactForm = async (data: { name: string; email: string; message: string }) => {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getFunFacts = async () => {
  const response = await fetch(`${API_URL}/funfacts`);
  return response.json();
};

export const submitFunFact = async (data: { fact: string; author: string }) => {
  const response = await fetch(`${API_URL}/funfacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}; 