const express = require("express");
const Wishlist = require("../model/wishlist.model");
const router = express.Router();
const verifyUser = require("../middleware/verifyUser");

router.route("/").post(verifyUser,async(req,res)=>{
    const newWishlist = new Wishlist(req.body);
    try {
        const savedWishlist = await newWishlist.save();
        res.status(201).json(savedWishlist);
    } catch (error) {
        res.status(500).json({messsage:"failed to create Wishlist"})
    }
})

router.route("/:id").delete(verifyUser,async(req,res)=>{
    try {
       await Wishlist.findByIdAndDelete(req.params.id); 
       res.json({message:"Hotel deleted from the Wishlist"});
    } catch (error) {
        res.status(500).json({message:"could not delete Hotel from the Wishlist"});
    }
})

router.route("/").get(verifyUser,async(req,res)=>{
     try {
        const wishlist = await wishlist.find({});
        wishlist ? res.json(wishlist) : res.json({message:"No items found in the Wishlist"});
     } catch (error) {
        console.log(error);
        res.status(500).json(error);
     }
})

module.exports = router;