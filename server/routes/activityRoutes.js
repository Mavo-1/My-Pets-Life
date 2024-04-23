const express = require('express');
const router = express.Router();
const Activity = require('../models/Activities');
const {isAuthenticated} = require('../middleware/auth');
const passport = require('passport');
const activitiesController = require('../controllers/activitiesController');

router.get('/', activitiesController.getActivities);
router.post('/', activitiesController.postActivities);

module.exports = router;
