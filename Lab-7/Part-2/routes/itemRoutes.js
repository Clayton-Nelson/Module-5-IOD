const express = require('express');
const fetchController = require('../controllers/fetchController');
const router = express.Router();

router.get('/fetch', (req, res) => {
    fetchController.fetchData(req, res);
});

router.get('/sort', (req, res) => {
    fetchController.filterCategory(req, res);
});

module.exports = router;