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
    await Holiday.insertMany(holidays)
    res.json(holidays)
})

router.get("/", (req,res) => {
    res.send("holidays")
})

//Create route
router.post("/", async (req, res) => {
    console.log("body", req.body)
    try {
        const createdHoliday = await Holiday.create(req.body);
        res.status(200).send(createdHoliday);
      } catch (error) {
        res.status(400).json({ error: error.message });
      };
})

module.exports = router