import axios from "axios"

class UrlApi {
  async shorten(longUrl) {
    return longUrl && (await axios.post("/api/url/shorten-url", { longUrl }))
  }
}

export default new UrlApi()
