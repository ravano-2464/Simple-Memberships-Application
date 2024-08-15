const express = require('express');
const router = express.Router();
const membershipController = require('../controllers/membershipController');

router.get('/articles', membershipController.getArticles);
router.get('/videos', membershipController.getVideos);

module.exports = router;