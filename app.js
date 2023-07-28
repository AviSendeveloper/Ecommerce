const express = require("express");
const session = require("express-session");
const mongoDBSessionStore = require("connect-mongodb-session")(session);
const passport = require("passport");
const flash = require("connect-flash");
const dbConnection = require("./Database/connection");
const User = require("./Models/User");
const Routes = require("./Routes");
const UserService = require("./Services/UserService");
require("./Config/PassportLocalAuth");

const app = express();
const mongodbUri = process.env.DB_URI || "mongodb://localhost:27017/Ecommerce";
const sessionStore = new mongoDBSessionStore({
    uri: mongodbUri,
    collection: "sessions",
});
app.set("view-engine", "ejs");
app.set("views", "Views");
app.use(express.static("Public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
    session({
        secret: "E-Commerce",
        saveUninitialized: false,
        resave: false,
        // store: sessionStore,
    })
);
app.use(passport.initialize());
app.use(passport.session());
// import passport local login

app.use(flash());

// save data in local, will available in all view render
app.use((req, res, next) => {
    res.locals.returnData = req.flash("returnData");
    next();
});

// routes
app.use(Routes);
app.get("/", (req, res, next) => {
    return res.send({ url: req.url, method: req.method });
});

const port = process.env.PORT || 3000;
dbConnection(mongodbUri)
    .then(() => {
        console.log(`Database connected with ${mongodbUri}`);
        app.listen(port, () => {
            console.log(`Server is running in port ${port}`);
        });

        return true;
    })
    .then(() => {
        User.findOne({ userType: "admin" }).then((admin) => {
            if (!admin) {
                UserService.createUser({
                    firstname: "admin",
                    lastname: "super",
                    email: "admin@email.com",
                    password: "123456",
                    phone: "123456789",
                    userType: "admin",
                });
            }
            return true;
        });
    })
    .then(() => {
        User.findOne({ userType: "user" }).then((user) => {
            if (!user) {
                UserService.createUser({
                    firstname: "user",
                    lastname: "demo",
                    email: "user@email.com",
                    password: "123456",
                    phone: "123456789",
                    userType: "user",
                });
            }
        });
    })
    .catch((err) => {
        console.log(`Error message: ${err.messages} \n Stack: ${err.stack}`);
    });
