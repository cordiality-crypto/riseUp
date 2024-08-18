import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173', // Adjust this to match your frontend URL
  optionsSuccessStatus: 200
}));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:3301/riseUP')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Define a schema
const formSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
});

// Create a model
const Form = mongoose.model('Form', formSchema);

// Define routes
app.post('/submit', async (req, res) => {
  const formData = new Form(req.body);
  try {
    await formData.save();
    res.status(201).send('Form data saved');
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(400).send('Error saving form data');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});