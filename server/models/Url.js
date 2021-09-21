const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema(
  {
    longUrl: {
      type: String,
      required: true,
      trim: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    urlCode: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model("Url", urlSchema)
