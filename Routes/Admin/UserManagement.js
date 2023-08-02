const Router = require("express").Router();
const UserManagementController = require("../../Controllers/Admin/UserManagementController");

Router.use("/list", UserManagementController.userList);
Router.get("/edit/:userId", UserManagementController.editUser);
Router.post("/update", UserManagementController.updateUser);
Router.post("/delete", UserManagementController.deleteUser);

module.exports = Router;
