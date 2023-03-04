const mongoose = require("mongoose");

const CropSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
    owner: {
      type: String,
    },
    img: {
      type: String,
    },
    state: {
      type: String,
    },
    district: {
      type: String,
    },
    taluka: {
      type: String,
    },
    village: {
      type: String,
    },
    description: {
      type: String,
    },
    contact_number: {
      type: Number,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crop", CropSchema);
