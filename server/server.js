const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const { authToken } = require('./middleware/auth');
require('dotenv').config()
const authRouter = require('./routes/authRoutes');
const activitiesRouter = require('./routes/activityRoutes')

const app = express();
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

//specify the exact orogin of the frontend application
const corsOptions= {
    origin: 'http://localhost:3000',
    credentials: true, //Allows credentials (cookies, authorization headers)
};

// Allow all origins for CORS (for development)
app.use(cors(corsOptions));

//Routes
app.use('/auth', authRouter);
app.use('/activities', activitiesRouter)

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {})
.then(() => console.log('MongoDB is connected'))
.catch(err => console.error('MongoDB connection error:', err));



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

