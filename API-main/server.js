const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const walletRoutes = require('./routes/walletRoutes');
const payrollRoutes = require('./routes/payrollRoutes');
const posRoutes = require('./routes/posRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/wallet', walletRoutes);
app.use('/api/payroll', payrollRoutes);
app.use('/api/pos', posRoutes);

app.get('/', (req, res) => {
  res.send('Core API Server is running...');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Core API server running on port ${PORT}`));