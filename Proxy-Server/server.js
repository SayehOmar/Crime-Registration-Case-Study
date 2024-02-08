const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS middleware
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Proxy endpoint
app.post('/submit-form', async (req, res) => {
  try {
    const googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbwbGklgosmM3ULQq8Ntf72rQyCGEZPrOtrFsU0ybXaYyRMvu0HQZS9Fzvpb8YZa32lhWQ/exec';
    const response = await fetch(googleAppsScriptUrl, {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
