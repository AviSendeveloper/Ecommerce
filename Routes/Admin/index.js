const Router = require("express").Router();
const UserManagement = require("./UserManagement");
const AdminManagement = require("./AdminManagement");
const DashboardController = require("../../Controllers/Admin/DashboardController");

Router.get("/", DashboardController.dashboard);

Router.use("/management/admin", AdminManagement);
Router.use("/management/user", UserManagement);

module.exports = Router;
