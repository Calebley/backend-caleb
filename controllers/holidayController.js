const express = require("express")
const router = express.Router()
const Holiday = require("../models/Holiday")

router.get("/seed", async (req,res) => {
    await Holiday.deleteMany({})
    await Holiday.insertMany([
        {
            name: "New Year's Day"
        },
        {
            name: "Good fridy"
        }
    ])
    res.send("holidays seeded")
})

router.get("/", (req,res) => {
    res.send("holidays")
})

module.exports = router