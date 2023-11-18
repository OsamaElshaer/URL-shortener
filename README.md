# URL-shortener

a simple URL shortener built using Node.js and PostgreSQL. A URL shortener is a web application that takes long URLs and converts them into short, easy-to-share links.

### Project Status
This project is currently in development.

### System Design

**Base64 Encoding**
The short URLs in this project are generated using Base64 encoding. Base64 encoding is a binary-to-text encoding scheme that allows binary data to be represented as ASCII text. This is particularly useful for short URLs because which i can generate alot of short urls **2^64**.

**Index on shortUrl which is the PK**
To optimize the retrieval of original URLs based on short URLs, an index is created on the shortUrl column in the database. Indexing allows for faster lookup operations and enhances the overall performance of the URL shortening service.


## Getting Started
These instructions will give you a copy of the project up and running on your local machine for development and testing purposes.

### **Prerequisites**

### Installation

1. Clone the repository.
2. Install dependencies:
    ```bash
    npm install
    ```

### Configuration

Create a .env file in the root directory:

```bash
    PORT=3000
    DB_HOST=localhost
    DB_PORT=5432
    DB_DEV=your_dev_database_name
    DB_TEST=your_test_database_name
    POSTGRES_USER=your_postgres_user
    POSTGRES_PASSWORD=your_postgres_password
```

## Usage

to Shorten a URL Send a **POST** request to **/shorten** with a JSON payload:

        {
            "originalUrl": "https://www.example.com"
        }


to Retrieve Original URL \

    http://localhost:3000/:shortUrl
    

## Contributing

Feel free to contribute to this project. Fork it, make changes, and submit a pull request.

### License

MIT License.


