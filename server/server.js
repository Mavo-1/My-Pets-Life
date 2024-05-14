const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));



// Routes
const authRouter = require("./routes/authRoutes");
const activityRouter = require("./routes/activityRoutes");

app.use("/auth", authRouter);
app.use("/activities",activityRouter);

// Passport Configuration
require('./config/passport')(passport);

const PORT =  5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
