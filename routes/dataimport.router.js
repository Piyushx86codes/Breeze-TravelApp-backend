const express = require("express");
const router = express.Router();

const Hotel = require("../model/hotel.model");
const hotels = require("../data/hotels");

router.route("/").post( async (req,res)=>{
   try {
    await Hotel.remove();
    const hotelsinDB = await Hotel.insertMany(hotels.data);
    res.json(hotelsinDB)
   } catch (error) {
    console.log(error);
     res.json({message:"failed to add data to DB"})
   }
})

module.exports = router;