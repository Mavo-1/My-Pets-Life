const express = require('express');
const router = express.Router();
const { authToken } = require('../middleware/auth');
const Activity = require('../models/activity');

// Route to add a new activity
router.post('/activities', authToken, async (req, res) => {
    try {
        // Create a new activity based on the request body
        const newActivity = new Activity({
            activityType: req.body.activityType
        });
        // Save the new activity to the database
        const savedActivity = await newActivity.save();
        res.status(201).json(savedActivity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to retrieve the list of activity types
router.get('/activities', authToken, async (req, res) => {
    try {
        // Retrieve all activities from the database
        const activities = await Activity.find();
        res.json(activities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
