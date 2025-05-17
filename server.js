import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api', authRoutes);

app.get('/health', (req, res) => res.status(200).send('Service is runnig!!'));

// Only start server if not in test environment
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
