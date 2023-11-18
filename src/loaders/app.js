const express = require("express");

const app = express();
const { urlRouter } = require("../routes/url.routes");

app.use(express.json());

app.use("/", urlRouter);

app.all("*", (req, res, next) => {
    return res.status(404).json({
        status: "error",
        message: "not found",
    });
});
app.use((err, req, res, next) => {
    return res.status(500).json({
        status: "error",
        message: { err: err.stack },
    });
});


module.exports.app = app;
