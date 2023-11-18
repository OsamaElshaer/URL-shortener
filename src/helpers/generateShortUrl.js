function generateShortUrl(originalUrl) {
    const buffer = Buffer.from(originalUrl);
    const shortBuffer = buffer.slice(-8);
    const shortUrl = shortBuffer.toString("base64");
    return shortUrl;
}
module.exports = generateShortUrl;
