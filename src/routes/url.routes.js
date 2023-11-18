const express = require("express");
const router = express.Router();

const UrlService = require("../services/url.service");
const UrlModel = require("../models/urlModel");

const urlModel = new UrlModel();
const urlService = new UrlService(urlModel);

router.post("/shorten", urlService.shorten);
router.get("/:shortUrl", urlService.getOriginalUrl);


module.exports.urlRouter = router;
