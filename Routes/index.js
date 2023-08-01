const Router = require("express").Router();
const AuthRoute = require("./Auth");
const AdminRoute = require("./Admin");
// const MainRoute = require("./Main/AuthRoute");
const { isAdminAuth } = require("../Middlewares/Admin");

Router.use(AuthRoute);
Router.use("/admin", isAdminAuth, AdminRoute);
// Router.use("/", MainRoute);

module.exports = Router;
