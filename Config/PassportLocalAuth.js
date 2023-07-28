const passport = require("passport");
const passportLocalStrategy = require("passport-local").Strategy;
const UserService = require("../Services/UserService");

passport.use(
    new passportLocalStrategy(async (email, passport, done) => {
        console.log("local passport");
        const response = await UserService.matchUser({ email, passport });
        if (!response.status) {
            done(null, false);
        } else {
            done(null, response.data);
        }
    })
);

// used to serialize the user for the session
passport.serializeUser(function (user, done) {
    console.log("1");
    done(null, user);
});

// used to deserialize the user
passport.deserializeUser(function (user, done) {
    console.log("2");
    done(null, user);
});
