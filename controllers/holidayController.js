const express = require('express');
const Holiday = require("../models/Holiday")
const router = express.Router();

router.get("/seed", async (req, res) => {

  const holidays = [
    {
      name: "New Year's Day",
    },
    {
      name: "Good Friday",
    }
  ]
  await Holiday.deleteMany({});
  await Holiday.insertMany(holidays)
  res.json(holidays)
})

//Index route
router.get('/', (req, res) => {
    Holiday.find()
      .then(holidays => {
        res.json(holidays)
      })
      .catch(err => {
        res.json(err)
      })
  })



//* Create Route
router.post("/", async (req, res) => {
  console.log("body", req.body)
  try {
    const createdHoliday = await Holiday.create(req.body);
    res.status(200).send(createdHoliday);
  } catch (error) {
    res.status(400).json({ error: error.message });
  };
});

//Delete route
router.delete("/:id", async (req, res) => {
    await Holiday.findByIDAndRemove(req.params.id)
    res.json({ message: "Holiday Deleted" })
})

//Put route
router.put("/:id", async (req, res) => {
    await Holiday.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Holiday Updated" });
  });

module.exports = router;