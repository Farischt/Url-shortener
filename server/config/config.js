require("dotenv").config()

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

module.exports.databaseURI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@projettransverse.fshfl.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
module.exports.baseURL = "http://localhost:5000"
