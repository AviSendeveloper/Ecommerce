const { body } = require("express-validator");
const UserService = require("../../Services/UserService");

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
    body("phone")
        .notEmpty()
        .trim()
        .isMobilePhone()
        .withMessage("phone should be only number"),
    body("email", "Email should not be empty")
        .isEmail()
        .withMessage("Invalid email")
        .custom(async (value) => {
            const response = await UserService.checkUserExist(value);
            if (response.status) throw new Error(`${value} already registered`);
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
