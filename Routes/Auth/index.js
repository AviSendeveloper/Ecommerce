const Router = require("express").Router();
const passport = require("passport");
const AuthController = require("../../Controllers/Admin/AuthController");
const validator = require("../../Validations/validator");
const {
    LoginValidation,
    RegistrationValidation,
} = require("../../Validations/Auth");
const { isAdminAuth, restrictLogin } = require("../../Middlewares/Admin");

// Admin
Router.get("/admin/login", restrictLogin, AuthController.getLogin);

Router.post(
    "/admin/login",
    restrictLogin,
    LoginValidation,
    validator,
    passport.authenticate("local", {
        successRedirect: "/admin",
        failureRedirect: "/admin/login",
    }),
    AuthController.postLogin
);

Router.get("/admin/register", restrictLogin, AuthController.getRegister);

Router.post(
    "/admin/register",
    restrictLogin,
    RegistrationValidation,
    validator,
    AuthController.postRegister
);

Router.post("/admin/logout", AuthController.signout);

module.exports = Router;
