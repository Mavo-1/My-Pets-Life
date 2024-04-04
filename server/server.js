const express = require('express');
const mongoose = require('mongoose')
const { authToken } = require('./middleware/auth');
require('dotenv').config()

const app = express()

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define routes
app.get("/api", authToken, (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

