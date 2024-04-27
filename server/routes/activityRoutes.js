// activityRoutes.js
const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');

router.get('/', activityController.getActivity);
router.post('/', activityController.postActivity);

module.exports = router;
