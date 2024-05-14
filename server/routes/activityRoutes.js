// activityRoutes.js
const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');
const { ensureAuth } = require('../middleware/auth');

router.get('/', ensureAuth,  activityController.getActivity);
router.post('/', ensureAuth, activityController.postActivity);

module.exports = router;
 