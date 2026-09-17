const express = require('express');

const router = express.Router();

// GET /
router.get('/', (req, res) => {
    res.send('get method from user module');
});

// PUT /update-details
router.put('/update-details', (req, res) => {
    res.send('put method from user module');
});

// POST /create-details
router.post('/create-details', (req, res) => {
    res.send('post method from user module');
});

// DELETE /delete-details
router.delete('/delete-details', (req, res) => {
    res.send('delete method from user module');
});

module.exports = router;
