const UserService = require("../../Services/UserService");

exports.userList = async (req, res, next) => {
    const response = await UserService.userList({ userType: "user" });
    return res.render("Admin/UserManagement/list.ejs", {
        users: response.data,
    });
};

exports.editUser = async (req, res, next) => {
    const userDetails = await UserService.userDetails(req.params.userId);
    return res.render("Admin/UserManagement/edit.ejs", {
        user: userDetails.data,
    });
};

exports.updateUser = async (req, res, next) => {
    const { userId, firstname, lastname, email, isAdmin } = req.body;
    const userType = isAdmin == "1" ? "admin" : "user";

    const response = await UserService.updateUser({
        userId,
        firstname,
        lastname,
        email,
        userType,
    });

    return res.redirect("../user/list");
};

exports.deleteUser = async (req, res, next) => {
    const { userId } = req.body;
    await UserService.deleteUser(userId);
    return res.redirect("back");
};
