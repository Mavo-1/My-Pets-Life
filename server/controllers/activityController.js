const express = require("express");
const router = express.Router();
const Activity = require('../models/Activities')

// GET all activities
router.getActivity= ("/", async (req, res) => {
    try {
      const activities = await Activity.find().sort({ timestamp: -1 });
      res.status(200).json(activities);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // POST new activity
  router.postActivity =("/", async (req, res) => {
    const activity = new Activity({
      activityType: req.body.activityType,
      timestamp: req.body.timestamp,
      userId: req.user._id, // Assuming you have user authentication middleware to populate req.user
    });
  
    try {
      const newActivity = await activity.save();
      res.status(201).json(newActivity);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  module.exports = router;
  