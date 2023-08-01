exports.getLogin = (req, res, next) => {
    return res.render("Admin/Auth/login.ejs");
};

exports.getRegister = (req, res, next) => {
    return res.render("Admin/Auth/register.ejs");
};

exports.postLogin = (req, res, next) => {
    if (req.rememberMe) {
        req.session.coockies.maxAge = 30 * 24 * 60 * 1000;
    }

    return res.redirect("/admin");
};

exports.postRegister = (req, res, next) => {
    return res.send(`${req.url}: ${req.method}`);
};

exports.signout = (req, res, next) => {
    req.user = undefined;
    req.session.destroy();
    return res.redirect("back");
};
