const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/features.html', (req, res) => res.sendFile(path.join(__dirname, 'public', 'features.html')));
app.get('/how-it-works.html', (req, res) => res.sendFile(path.join(__dirname, 'public', 'how-it-works.html')));
app.get('/impact.html', (req, res) => res.sendFile(path.join(__dirname, 'public', 'impact.html')));
app.get('/about.html', (req, res) => res.sendFile(path.join(__dirname, 'public', 'about.html')));
app.get('/contact.html', (req, res) => res.sendFile(path.join(__dirname, 'public', 'contact.html')));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
