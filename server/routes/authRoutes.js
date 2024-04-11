const express = require('express')
const router = express.Router();
const bcrypt = require ('bcrypt')
const User = require('../models/User');
const jwt = require('jsonwebtoken');
// const { authToken} = require('../middleware/auth');


//Post Signup
router.post('/signup', async (req,res) => {
  try{
    const {firstName, lastName, email, password} = req.body;

    //Checks if user already exists
    const existingUser = await User.findOne({ email});
    if(existingUser){
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

    res.status(201).json({ user: newUser, token });

  } catch (error){
    console.error(error);
    res.status(500).json({
      message: 'Server error'
    })
  }
});

//Post Login
 router.post('/login', async (req,res) => {
  try{
    const { email, password } = req.body;

    //Check if user exists
    const user = await User.findOne({ email });
    if(!user){
      return res.status(400).json({ message: 'Invalid credentials'});
    }

    //Compares passwords
    const isMatch = await bcrypt.compare( password, user.password);
    if(!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials'});
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET);

    res.status(200).json({ user,token})
  }catch(error){
    console.error(error);
    res.status(500).json({ message: 'Server error'});
  }

 });


module.exports = router;