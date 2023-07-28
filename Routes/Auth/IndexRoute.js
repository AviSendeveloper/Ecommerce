const Router = require("express").Router();
const passport = require("passport");
const AuthController = require("../../Controllers/Admin/AuthController");
const validator = require("../../Validations/validator");
const {
    LoginValidation,
    RegistrationValidation,
} = require("../../Validations/Auth");

// Admin
Router.get("/admin/login", AuthController.getLogin);
Router.post(
    "/admin/login",
    // LoginValidation,
    // validator,
    passport.authenticate("local")
    // AuthController.postLogin
);
// {
//     successRedirect: "/admin",
//     failureRedirect: "/admin/login",
// }
Router.get("/admin/register", AuthController.getRegister);
Router.post(
    "/admin/register",
    RegistrationValidation,
    validator,
    AuthController.postRegister
);

module.exports = Router;
