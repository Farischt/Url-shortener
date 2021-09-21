const validUrl = require("valid-url")
const shortid = require("shortid")
// const urlExist = require("url-exist") // ES Module error to be checked

const { baseURL } = require("../config/config")
const UrlModel = require("../models/Url")

class UrlController {
  /**
   * Creates and persists a shortened URL
   * @async
   * @param  {HttpServerRequest} req - The http request object
   * @param  {HttpServerResponse} res - The http response object
   * @author Faris CHTATOU <faris.chtatou@efrei.net>
   */
  async create(req, res) {
    const { longUrl } = req.body

    if (typeof longUrl !== "string") {
      return res.status(400).json({ error: "missing_long_url" })
    } else if (!validUrl.isUri(longUrl)) {
      return res.status(400).json({ error: "invalid_long_uri" })
    }
    // else if (!(await urlExist(longUrl))) {
    //   return res.status(404).json({ error: "long_url_not_found" })
    // }
    else if (!validUrl.isUri(baseURL)) {
      return res.status(400).json({ error: "invalid_base_url" })
    }

    try {
      let url = await UrlModel.findOne({ longUrl })

      if (url) {
        return res.status(200).json({ new: false, ...url._doc })
      }

      const urlCode = shortid.generate()
      const shortUrl = `${baseURL}/${urlCode}`
      const newUrl = new UrlModel({
        longUrl,
        shortUrl,
        urlCode,
      })
      await newUrl.save()

      res.status(201).json({ new: true, ...newUrl._doc })
    } catch (error) {
      res.status(500).json({ error: "internal_server_error" })
    }
  }

  /**
   * Redirects a shortened valid URL to a real URL
   * @async
   * @param  {HttpServerRequest} req - The http request object
   * @param  {HttpServerResponse} res - The http response object
   * @author Faris CHTATOU <faris.chtatou@efrei.net>
   */
  async redirect(req, res) {
    const { code } = req.params

    if (typeof code !== "string") {
      return res.status(400).json({ error: "missing_code" })
    }

    try {
      let url = await UrlModel.findOne({ urlCode: code })

      if (!url) {
        return res.status(404).json({ error: "url_not_found" })
      }
      res.status(200).redirect(url.longUrl)
    } catch (error) {
      res.status(500).json({ error: "internal_server_error" })
    }
  }
}

module.exports = new UrlController()
