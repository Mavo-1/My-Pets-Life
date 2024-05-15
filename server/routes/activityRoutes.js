// activityRoutes.js
const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');
const passport = require('passport')
// const { ensureAuth } = require('../middleware/auth');
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;

router.get('/', passport.authenticate('jwt', {session:false}),  activityController.getActivity);
router.post('/', passport.authenticate('jwt', {session:false}), activityController.postActivity);

module.exports = router;
 