const Router = require("express").Router();
const AuthRoute = require("./Auth/IndexRoute");
const AdminRoute = require("./Admin/IndexRoute");
// const MainRoute = require("./Main/AuthRoute");

Router.use(AuthRoute);
Router.use("/admin", AdminRoute);
// Router.use("/", MainRoute);

module.exports = Router;
