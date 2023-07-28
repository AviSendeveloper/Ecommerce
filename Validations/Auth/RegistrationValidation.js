const { body } = require("express-validator");

module.exports = [
    body("firstname")
        .notEmpty()
        .trim()
        .isString()
        .withMessage("Firstname should be only alphanumeric"),
    body("lastname")
        .notEmpty()
        .trim()
        .isString()
        .withMessage("Lastname should be only alphanumeric"),
    body("email", "Email should not be empty")
        .notEmpty()
        .isEmail()
        .withMessage("Invalid email")
        .custom(async (value) => {
            const user = await User.findOne({ email: value });
            if (user) throw new Error(`${value} already registered`);
            return true;
        }),
    body("password", "Minimum length 6").trim().isLength({ min: 6 }),
    body("confirmPassword").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("password and confirm-password should be same");
        }
        return true;
    }),
];
