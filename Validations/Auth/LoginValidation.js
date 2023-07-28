const { body } = require("express-validator");

module.exports = [
    body("email", "Invalid email").isEmail().trim().exists(),
    body("password", "Minimum length 6").trim().isLength({ min: 6 }),
];
