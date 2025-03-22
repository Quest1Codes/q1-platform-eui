const userRoutes = require("./user_routes");
const dashboardRoutes = require("./dashboard_routes");

module.exports = function (app, db) {
    userRoutes(app, db);
    dashboardRoutes(app, db);
};
