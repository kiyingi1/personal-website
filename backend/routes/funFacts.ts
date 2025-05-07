import express from 'express';
import { body, validationResult } from 'express-validator';
import FunFact from '../models/FunFact';

const router = express.Router();

// Validation middleware
const validateFunFact = [
  body('fact').trim().notEmpty().withMessage('Fact is required'),
  body('author').trim().notEmpty().withMessage('Author name is required')
];

// Submit new fun fact
router.post('/', validateFunFact, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fact, author } = req.body;
    const funFact = new FunFact({ fact, author });
    await funFact.save();

    res.status(201).json({ message: 'Fun fact added successfully' });
  } catch (error) {
    console.error('Error adding fun fact:', error);
    res.status(500).json({ message: 'Error adding fun fact' });
  }
});

// Get all fun facts
router.get('/', async (req, res) => {
  try {
    const funFacts = await FunFact.find().sort({ createdAt: -1 });
    res.json(funFacts);
  } catch (error) {
    console.error('Error fetching fun facts:', error);
    res.status(500).json({ message: 'Error fetching fun facts' });
  }
});

export default router; 