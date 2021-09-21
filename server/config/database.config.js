const mongoose = require("mongoose")
const { databaseURI } = require("./config")

module.exports.connectToDatabase = async () => {
  try {
    await mongoose.connect(databaseURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Connection to database established successfully !")
  } catch (error) {
    console.log(
      `Connection not established due to the following error : ${error.message}`
    )
  }
}
