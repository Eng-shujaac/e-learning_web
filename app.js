// app.js
const express = require('express');
const app = express();
const path = require('path');

// Set view engine to EJS
app.set('view engine', 'ejs');

// Set folder for static assets (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('home'); // Home Page
});

app.get('/about', (req, res) => {
  res.render('about'); // About Page
});

app.get('/courses', (req, res) => {
  res.render('courses'); // Courses Page
});

app.get('/contact', (req, res) => {
  res.render('contact'); // Contact Page
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
