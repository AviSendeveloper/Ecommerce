const UserService = require("../../Services/UserService");

exports.adminList = async (req, res, next) => {
    const response = await UserService.userList({ userType: "admin" });
    return res.render("Admin/AdminManagement/list.ejs", {
        admins: response.data,
    });
};
