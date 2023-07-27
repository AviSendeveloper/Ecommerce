const express = require("express");
const dbConnection = require("./Database/connection");
const User = require("./Models/User");

const app = express();
app.set("view-engine", "ejs");
app.set("views", "Views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.get("/", (req, res, next) => {
    return res.send({ url: req.url, method: req.method });
});

const port = process.env.PORT || 3000;
dbConnection()
    .then((dbUri) => {
        console.log(`Database connected with ${dbUri}`);
        app.listen(port, () => {
            console.log(`Server is running in port ${port}`);
        });

        return true;
    })
    .then(() => {
        User.findOne({ userType: "admin" }).then((admin) => {
            if (!admin) {
                User.create({
                    firstname: "admin",
                    lastname: "super",
                    email: "admin@email.com",
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
                User.create({
                    firstname: "user",
                    lastname: "demo",
                    email: "user@email.com",
                    phone: "123456789",
                    userType: "user",
                });
            }
        });
    })
    .catch((err) => {
        console.log(`Error message: ${err.messages} \n Stack: ${err.stack}`);
    });
