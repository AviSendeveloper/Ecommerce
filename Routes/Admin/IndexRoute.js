const Router = require("express").Router();
const AuthRoute = require("../Auth/IndexRoute");
const DashboardController = require("../../Controllers/Admin/DashboardController");

Router.get("/", DashboardController.dashboard);
Router.use(AuthRoute);

module.exports = Router;
