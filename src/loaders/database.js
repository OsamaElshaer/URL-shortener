const { Pool, Pool } = require("pg");
const { user, password, host, dbPort, db_dev } = require("../config/env");

const pool = new Pool({
    user: user,
    host: host,
    database: db_dev,
    password: password,
    port: dbPort,
    max: 20,
    idleTimeoutMillis: 30000,
});

module.exports.pool = pool;
