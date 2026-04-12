const express = require('express');
const app = express();

// Home API
app.get('/', (req, res) => {
  res.send('🚀 Hello from 3-Tier DevOps Project running on ECS!');
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
