const Router = require("express").Router();
const UserManagementController = require("../../Controllers/Admin/UserManagementController");

Router.use("/list", UserManagementController.userList);

module.exports = Router;
