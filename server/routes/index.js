const express = require("express")
const router = express.Router()
const urlController = require("../controllers/url")

router.get("/:code", urlController.redirect)

module.exports = router
