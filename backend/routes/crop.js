const router = require("express").Router();
const Crop = require("../models/Crop");

router.post("/create", async (req, res) => {
  const newCrop = new Crop(req.body);
  try {
    const data = await newCrop.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const crops = await Crop.find();
    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
