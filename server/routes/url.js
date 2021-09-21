const express = require("express")
const router = express.Router()
const urlController = require("../controllers/url")

router.post("/shorten-url", urlController.create)

module.exports = router
