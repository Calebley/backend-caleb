const express = require("express")
const router = express.Router()
const Holiday = require("../models/Holiday")

router.get("/seed", async (req,res) => {

    const holidays = [
        {
            name: "New Year's Day"
        },
        {
            name: "Good friday"
        }
    ]
    await Holiday.deleteMany({})
    await Holiday.insertMany()
    res.json(holidays)
})

router.get("/", (req,res) => {
    res.send("holidays")
})

module.exports = router