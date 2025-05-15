const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('Admin server is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Admin server running on port ${PORT}`));