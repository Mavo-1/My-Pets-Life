// Import required modules
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User");
const bcrypt = require("bcrypt");
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET; // Replace with your own secret key

module.exports = function (passport) {
  // Configure the Local Strategy for login
  passport.use(
    new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
      try {
        // Find the user by email
        const user = await User.findOne({ email: email });

        // If user is not found, return false with a message
        if (!user) {
          return done(null, false, { message: "Incorrect email." });
        }

        // Compare the provided password with the stored password hash
        const isValidPassword = await bcrypt.compare(password, user.password);

        // If password is incorrect, return false with a message
        if (!isValidPassword) {
          return done(null, false, { message: "Incorrect password." });
        }

        // Return the user if credentials are correct
        return done(null, user);
      } catch (err) {
        // If any error occurs, pass it to done callback
        return done(err);
      }
    })
  );

  // Configure the JWT Strategy for token-based authentication
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtSecret,
      },
      async (jwtPayload, done) => {
        try {
          // Find the user by ID from the JWT payload
          const user = await User.findById(jwtPayload.sub);

          // If user is not found, return false with a message
          if (!user) {
            return done(null, false, { message: "User not found." });
          }

          // Return the user if found
          return done(null, user);
        } catch (err) {
          // If any error occurs, pass it to done callback
          return done(err);
        }
      }
    )
  );

  // Serialize user into the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Deserialize user from the session
  passport.deserializeUser(async (id, done) => {
    try {
      // Find user by ID
      const user = await User.findById(id);
      done(null, user); // Pass user to done callback
    } catch (err) {
      done(err); // Pass error to done callback
    }
  });
};
