import mongoose from 'mongoose';

const funFactSchema = new mongoose.Schema({
  fact: {
    type: String,
    required: [true, 'Fact is required'],
    trim: true
  },
  author: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.FunFact || mongoose.model('FunFact', funFactSchema); 