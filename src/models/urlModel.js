const { pool } = require("../loaders/database");

class UrlModel {
    insert(originalUrl, shortUrl) {
        const insertQuery = pool.query(
            "INSERT INTO urls VALUES($1,$2) RETURNING *",
            [shortUrl, originalUrl]
        );

        return insertQuery;
    }
    getOriginalUrl(shortUrl) {
        const selectQuery = pool.query(
            "SELECT original_url FROM urls WHERE short_url = $1",
            [shortUrl]
        );
        return selectQuery;
    }
}

module.exports = UrlModel;
