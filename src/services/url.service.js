const generateShortUrl = require("../helpers/generateShortUrl");
const UrlModel = require("../models/urlModel");

class UrlService {
    constructor(urlModel) {
        this.urlModel = urlModel;
    }
    shorten = async (req, res, next) => {
        try {
            const { originalUrl } = req.body;
            const shortUrl = generateShortUrl(originalUrl);
            const result = await this.urlModel.insert(originalUrl, shortUrl);
            return res.status(201).json({
                status: "success",
                data: { row: result.rows[0].short_url },
            });
        } catch (error) {
            next(error);
        }
    };
    getOriginalUrl = async (req, res, next) => {
        try {
            const { shortUrl } = req.params;
            const result = await this.urlModel.getOriginalUrl(shortUrl);
            const originalUrl = result.rows[0].original_url;

            if (result.rows.length === 0) {
                return res.status(404).json({
                    status: "error",
                    message: "Short URL not found",
                });
            }
            const isCompleteUrl = /^(http|https):\/\//.test(originalUrl);
            const fullUrl = isCompleteUrl
                ? originalUrl
                : `https://www.${originalUrl}`;

            console.log(fullUrl);
            return res.redirect(301, fullUrl);
        } catch (error) {
            next(error);
        }
    };
}

module.exports = UrlService;
