const { app } = require("./loaders/app");
const { port } = require("./config/env");

app.listen(port);
