const express = require('express');

const router = express.Router();

// GET /
router.get('/', (req, res) => {
    res.send('get method from product module');
});

// PUT /update-details
router.put('/update-details', (req, res) => {
    res.send('put method from product module');
});

// POST /create-details
router.post('/create-details', (req, res) => {
    res.send('post method from product module');
});

// DELETE /delete-details
router.delete('/delete-details', (req, res) => {
    res.send('delete method from product module');
});

module.exports = router;
