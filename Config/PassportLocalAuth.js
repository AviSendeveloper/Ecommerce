const passport = require("passport");
const passportLocalStrategy = require("passport-local").Strategy;
const UserService = require("../Services/UserService");

passport.use(
    new passportLocalStrategy(
        { usernameField: "email", passwordField: "password" },
        async (email, password, done) => {
            const response = await UserService.matchUser({ email, password });
            if (!response.status) {
                done(null, false);
            } else {
                done(null, response.data);
            }
        }
    )
);

// used to serialize the user for the session
passport.serializeUser(function (user, done) {
    done(null, user);
});

// used to deserialize the user
passport.deserializeUser(function (user, done) {
    done(null, user);
});
