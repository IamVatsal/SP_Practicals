const express = require('express');

const app = express();

// Middleware 1
function middleware1(req, res, next) {
    console.log('Middleware 1 executed');
    next();
}

// Middleware 2
function middleware2(req, res, next) {
    console.log('Middleware 2 executed');
    next();
}

// Register middleware
app.use(middleware1);
app.use(middleware2);

// Route
app.get('/', (req, res) => {
    res.send('Welcome to Express.js');
});

// Another route
app.get('/about', (req, res) => {
    res.send('This is About Page');
});

// Start server
app.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});
