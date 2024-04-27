const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/User');

exports.signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ firstName, lastName, email, password: hashedPassword });
        res.status(201).json({ message: 'Signup successful', user });
    } catch (error) {
        console.error('Error occurred during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) { return res.status(400).json({ message: 'Invalid email or password' }); }
        req.logIn(user, (err) => {
            if (err) { return next(err); }
            res.status(200).json({ message: 'Login successful', user });
        });
    })(req, res, next);
};

exports.logout = (req, res) => {
    req.logout();
    res.status(200).json({ message: 'Logout successful' });
    
};
