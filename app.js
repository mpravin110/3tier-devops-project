const express = require('express');
const app = express();

// Root API
app.get('/', (req, res) => {
  res.send('🔥 Updated from GitHub UI - DevOps Project Running!');
});

// Health Check API
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Application is healthy 🚀'
  });
});

// New API (extra feature)
app.get('/version', (req, res) => {
  res.json({
    version: 'v2',
    message: 'This is updated version deployed via GitHub UI'
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
