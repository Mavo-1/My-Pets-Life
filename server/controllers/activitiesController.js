const passport = require('passport');
const User = require('../models/User');

exports.getActivities = async (req,res) => {
    if(req.User){
        try {
            // Retrieve activities associated with the authenticated user
            const activities = await Activity.find({ userId: req.user._id });
            res.json(activities);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

exports.postActivities = async (req,res) => {
    if(req.User){
        try {
            // Retrieve activities associated with the authenticated user
            const activities = await Activity.find({ userId: req.user._id });
            res.json(activities);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}