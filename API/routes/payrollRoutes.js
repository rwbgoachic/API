const express = require('express');
const router = express.Router();

router.get('/history', (req, res) => {
  res.json({ success: true, history: [] });
});

module.exports = router;