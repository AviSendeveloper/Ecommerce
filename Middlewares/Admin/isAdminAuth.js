module.exports = (req, res, next) => {
    if (!req.isAuthenticated() || req.user.userType !== "admin") {
        return res.redirect("/admin/login");
    }
    next();
};
