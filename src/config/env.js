const dotenv = require("dotenv");
dotenv.config();

const {
    PORT,
    DB_HOST,
    DB_PORT,
    DB_DEV,
    DB_TEST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
} = process.env;

module.exports = {
    port: PORT,
    host: DB_HOST,
    dbPort: DB_PORT,
    db_dev: DB_DEV,
    db_test: DB_TEST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
};
