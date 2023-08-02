const UserService = require("../../Services/UserService");

exports.adminList = async (req, res, next) => {
    const response = await UserService.userList({ userType: "admin" });
    return res.render("Admin/AdminManagement/list.ejs", {
        admins: response.data,
    });
};

exports.editAdmin = async (req, res, next) => {
    const userDetails = await UserService.userDetails(req.params.userId);
    return res.render("Admin/AdminManagement/edit.ejs", {
        admin: userDetails.data,
    });
};

exports.updateAdmin = async (req, res, next) => {
    const { userId, firstname, lastname, email, isAdmin } = req.body;
    const userType = isAdmin == "1" ? "admin" : "user";

    const response = await UserService.updateUser({
        userId,
        firstname,
        lastname,
        email,
        userType,
    });

    return res.redirect("../admin/list");
};

exports.deleteAdmin = async (req, res, next) => {
    const { userId } = req.body;
    await UserService.deleteUser(userId);
    return res.redirect("back");
};
