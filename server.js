const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Load healthcare data
const healthcareData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'healthcare_data.json'), 'utf-8'));

// API endpoint to get healthcare data
app.get('/api/healthcare', (req, res) => {
    res.json(healthcareData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
