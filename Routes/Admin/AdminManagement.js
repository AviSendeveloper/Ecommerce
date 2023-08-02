const Router = require("express").Router();
const AdminManagementController = require("../../Controllers/Admin/AdminManagementController");

Router.get("/list", AdminManagementController.adminList);
Router.get("/edit/:userId", AdminManagementController.editAdmin);
Router.post("/update", AdminManagementController.updateAdmin);
Router.post("/delete", AdminManagementController.deleteAdmin);

module.exports = Router;
