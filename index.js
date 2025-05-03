import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});