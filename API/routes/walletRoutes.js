const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    const jwt = require('jsonwebtoken');
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ success: true, token });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

router.post('/create-merchant', (req, res) => {
  const { merchantName } = req.body;
  if (!merchantName) {
    return res.status(400).json({ success: false, message: 'Merchant name is required' });
  }
  return res.json({ success: true, message: `Merchant ${merchantName} created successfully` });
});

module.exports = router;