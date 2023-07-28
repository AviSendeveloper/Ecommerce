exports.getLogin = (req, res, next) => {
    return res.render("Admin/Auth/login.ejs");
};

exports.getRegister = (req, res, next) => {
    return res.render("Admin/Auth/register.ejs");
};

exports.postLogin = (req, res, next) => {
    return res.send(`${req.url}: ${req.user}`);
};

exports.postRegister = (req, res, next) => {
    return res.send(`${req.url}: ${req.method}`);
};
