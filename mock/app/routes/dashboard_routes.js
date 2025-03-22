module.exports = function (app, db) {
    db.then((db) => {
        app.get("/api/dashboard/overview-stats", (req, res) => {
            setTimeout(() => {
                res.send(db.get("overViewStats"));
            }, 1000);
        });
        app.get("/api/dashboard/data-source-dist", (req, res) => {
            res.send(db.get("dataSourceDist"));
        });
    });
};
