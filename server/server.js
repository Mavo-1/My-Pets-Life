const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const { authToken } = require('./middleware/auth');
require('dotenv').config()
const authRouter = require('./routes/authRoutes');

const app = express();
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use(cors({
    origin: '*' // leave for development, specify for security in prod
}));

//Routes
app.use('/auth', authRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {})
.then(() => console.log('MongoDB is connected'))
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

