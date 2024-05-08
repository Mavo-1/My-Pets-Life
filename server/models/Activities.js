const mongoose = require('mongoose');

// Define the schema for activities/events
const activitySchema = new mongoose.Schema({
    activityType: { type: String, required: true }, // Type of activity (e.g., "Food", "Walking", "Grooming", etc.)
    timestamp: { type: Date, default: Date.now }, // Timestamp for when the activity was logged
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to the user who created the activity
});

// Create a model for activities using the schema
const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;

