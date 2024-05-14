const express = require("express");
const router = express.Router();
const Activity = require('../models/Activities')

// GET all activities
router.getActivity = async (req, res) => {
  try {
    // Fetch activities for the authenticated user only
    const activities = await Activity.find({ userId: req.user._id }).sort({ timestamp: -1 });
    res.status(200).json(activities); // Send activities as JSON data
  } catch (error) {
    console.error("Error fetching activities:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

  
  // POST new activity
  router.postActivity =( async (req, res) => {

    try {
      const {activityType, timestamp } = req.body;
      const newActivity = new Activity({
        activityType: "someActivityType",
        timestamp: new Date(),
        userId: req.user._id // Assuming `req.user` contains the authenticated user's information
      });
      
     
      await newActivity.save();
      res.status(201).json(newActivity); // Send the newly created activity as JSON data
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  module.exports = router;
  