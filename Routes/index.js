const Router = require("express").Router();
const AuthRoute = require("./Auth");
const AdminRoute = require("./Admin");
// const MainRoute = require("./Main/AuthRoute");

Router.use(AuthRoute);
Router.use("/admin", AdminRoute);
// Router.use("/", MainRoute);

module.exports = Router;
