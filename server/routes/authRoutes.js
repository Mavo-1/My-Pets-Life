const express = require('express')
const router = express.Router();
const bcrypt = require ('bcrypt')
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { authToken} = require('../middleware/auth');


//Post Signup
router.post('/signup', async (req,res) => {
  try{
    const {firstName, lastName, email, password} = req.body;

    //Checks if user already exists
    const existingUser = await User.findOne({ email});
    if(existingUser == true){
      return res.status(400).json({message: "There's already an account with that email"})
    }
    
    //Hashes password
    const hashedPassword = await bcrypt.hash(password , 10);

    //Creates new User
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    //Generates JWT token
    const token = jwt.sign({ userId: newUser._id}, process.env.JWT_SECRET);

    res.status(201).json({ user: newUser, token});

  } catch (error){
    console.error(error);
    res.status(500).json({
      message: 'Server error'
    })
  }
});

//Post Login

router.post('/login', async (req,res) => {

});

// Example protected route
router.get('/profile', authToken, async (req,res) => {
    // Get user profile
  // req.user contains the authenticated user's information
});


module.exports = router;