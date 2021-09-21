require("dotenv").config()

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME
const DB_COLLECTION = process.env.DB_COLLECTION
const PORT = process.env.PORT || 5000

module.exports.databaseURI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_COLLECTION}.fshfl.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
module.exports.baseURL = `http://localhost:${PORT}`
