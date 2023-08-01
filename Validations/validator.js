const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
        const allErrors = [];
        const errors = result.errors.reduce((allErrors, error) => {
            allErrors.push(error.msg);
            return allErrors;
        }, allErrors);
        console.log(allErrors, errors);
        req.flash("returnData", req.body);
        return res.redirect("back");
    }
    next();
};
