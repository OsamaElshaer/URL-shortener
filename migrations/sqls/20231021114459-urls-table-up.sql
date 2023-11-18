/* Replace with your SQL commands */
CREATE TABLE urls (
    short_url VARCHAR(20) PRIMARY KEY,
    original_url  TEXT NOT NULL
);

CREATE INDEX idx_short_url ON urls (short_url);
