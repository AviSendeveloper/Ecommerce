const UserService = require("../../Services/UserService");

exports.userList = async (req, res, next) => {
    const response = await UserService.userList({ userType: "user" });
    return res.render("Admin/UserManagement/list.ejs", {
        users: response.data,
    });
};
