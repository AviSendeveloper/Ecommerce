module.exports = (req, res, next) => {
    if (!req.user || req.user.userType !== "user") {
        return res.redirect("/login");
    }
    next();
};
