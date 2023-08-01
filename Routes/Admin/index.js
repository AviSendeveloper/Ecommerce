const Router = require("express").Router();
const DashboardController = require("../../Controllers/Admin/DashboardController");
const { isAdminAuth } = require("../../Middlewares/Admin");

Router.get("/", isAdminAuth, DashboardController.dashboard);

module.exports = Router;
