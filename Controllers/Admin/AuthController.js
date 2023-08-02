const UserService = require("../../Services/UserService");

exports.getLogin = (req, res, next) => {
    return res.render("Admin/Auth/login.ejs");
};

exports.getRegister = (req, res, next) => {
    return res.render("Admin/Auth/register.ejs");
};

exports.postLogin = (req, res, next) => {
    if (req.rememberMe) {
        req.session.cookie.maxAge = 30 * 24 * 60 * 1000;
    }

    return res.redirect("/admin");
};

exports.postRegister = async (req, res, next) => {
    const {
        firstname,
        lastname,
        email,
        phone,
        password,
        userType = "admin",
    } = req.body;
    await UserService.createUser({
        firstname,
        lastname,
        email,
        phone,
        password,
        userType,
    });
    return res.redirect("/admin/login");
};

exports.signout = (req, res, next) => {
    req.user = undefined;
    req.session.destroy();
    return res.redirect("back");
};
