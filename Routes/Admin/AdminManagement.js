const Router = require("express").Router();
const AdminManagementController = require("../../Controllers/Admin/AdminManagementController");

Router.use("/list", AdminManagementController.adminList);

module.exports = Router;
