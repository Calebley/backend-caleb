require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const HolidayController = require("./controllers/holidayController")
const app = express()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

//...farther down the page

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

app.use(cors())
app.use(express.json())
app.use("/api/holidays", HolidayController)

app.get("/", (req,res) => {
    res.send("hi")
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})