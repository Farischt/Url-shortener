require("dotenv").config()
const express = require("express")
const urlRoutes = require("./routes/url")
const redirectRoutes = require("./routes")
const { connectToDatabase } = require("./config/database.config")

const app = express()
connectToDatabase()
app.use(
  express.json({
    extended: false,
  })
)

app.use("/", redirectRoutes)
app.use("/api/url", urlRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))
