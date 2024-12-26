const router = require("express").Router();
const urlService = require("../services/urlService");

router.post("/shorten", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }
  return res.json({ shortId: await urlService.getShortId(url) });
});

router.get("/redirect/:shortId", async (req, res) => {
  const { shortId } = req.params;
  const originalUrl = await urlService.getOriginalUrl(shortId);

  if (originalUrl) {
    return res.redirect(301, originalUrl);
  }
  return res.status(404).json({ error: "URL not found" });
});

module.exports = router;
