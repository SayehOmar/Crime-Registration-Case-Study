
// proxy-server.js

import express from 'express';
import fetch from 'node-fetch';
import path from 'path';

const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit-form', async (req, res) => {
  try {
    const googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbwaDecFm0gQl1_axFwsDOycZg6jLka3FI7tznv66Ls_gAV1dzCfx_j12pg1Oe5eGDmliw/exec';

    const googleAppsScriptResponse = await axios.post(googleAppsScriptUrl, req.body);

    // Forward Google Apps Script response to the frontend
    res.json(googleAppsScriptResponse.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});

