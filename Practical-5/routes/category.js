const express = require('express');

const router = express.Router();

// GET /
router.get('/', (req, res) => {
    res.send('get method from category module');
});

// PUT /update-details
router.put('/update-details', (req, res) => {
    res.send('put method from category module');
});

// POST /create-details
router.post('/create-details', (req, res) => {
    res.send('post method from category module');
});

// DELETE /delete-details
router.delete('/delete-details', (req, res) => {
    res.send('delete method from category module');
});

module.exports = router;
