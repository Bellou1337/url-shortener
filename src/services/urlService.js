const crypto = require("crypto");
const UrlModel = require("../models/model");

class UrlService {
  async getShortId(originalUrl) {
    const existingUrl = await UrlModel.findOne({ originalUrl });

    if (existingUrl) {
      return existingUrl.shortId;
    }

    const shortId = crypto.randomBytes(3).toString("hex");
    await UrlModel.create({ shortId, originalUrl });
    return shortId;
  }

  async getOriginalUrl(shortId) {
    const url = await UrlModel.findOne({ shortId });
    return url ? url.originalUrl : null;
  }
}

module.exports = new UrlService();
