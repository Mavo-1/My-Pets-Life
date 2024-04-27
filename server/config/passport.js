// Import the required modules
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

// Export the Passport configuration as a function
module.exports = function (passport) {
  // Configure the Local Strategy
  passport.use(
    new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
      try {
        // Find the user by email
        const user = await User.findOne({ email: email });

        // If user is not found, return false with a message
        if (!user) {
          return done(null, false, { message: "Incorrect email." });
        }

        // If password is incorrect, return false with a message
        if (!user.validPassword(password)) {
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
