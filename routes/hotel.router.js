const express = require('express');
const router = express.Router();

const Hotel = require("../model/hotel.model")

router.get("/", async (req, res) => {
  const hotelCategory = req.query.category;
  try {
     let hotels;
     if(hotelCategory){
      hotels = await Hotel.find({category:hotelCategory})
     }
     hotels = await Hotel.find({});

    if (hotels.length === 0) {
      return res.status(404).json({ message: "No Data Found" });
    }

    res.status(200).json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch hotels",
      error: error.message
    });
  }
});

module.exports = router;
