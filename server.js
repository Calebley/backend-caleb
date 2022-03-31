require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT

app.get("/", (req,res) => {
    res.send("hi")
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})