const express = require('express');
const session = require('express-session');
const cors = require('cors');
const crypto = require('crypto');
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();
const User = require('./models/User');

// Create Express app
const app = express();

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up session middleware before Passport initialization
const secretKey = crypto.randomBytes(32).toString('hex');
app.use(session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true
}));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Allow requests from localhost:3000
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Import routers
const authRouter = require('./routes/authRoutes');
const activitiesRouter = require('./routes/activityRoutes');

// Routes
app.use('/auth', authRouter);
app.use('/activities', activitiesRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
