const express = require("express");
const Wishlist = require("../model/wishlist.model");
const router = express.Router();

router.route("/").post(async(req,res)=>{
    const newWishlist = new Wishlist(req.body);
    try {
        const savedWishlist = await Wishlist.save();
        res.status(201).json(savedWishlist);
    } catch (error) {
        res.status(500).json({messsage:"failed to create Wishlist"})
    }
})

router.route("/:id").delete(async(req,res)=>{
    try {
       await Wishlist.findByIdAndDelete(req.params.id); 
       res.json({message:"Hotel deleted from the Wishlist"});
    } catch (error) {
        res.status(500).json({message:"could not delete Hotel from the Wishlist"});
    }
})

router.route("/").get(async(req,res)=>{
     try {
        const wishlist = await wishlist.find({});
        wishlist ? res.json(wishlist) : res.json({message:"No items found in the Wishlist"});
     } catch (error) {
        console.log(error);
        res.status(500).json(error);
     }
})

module.exports = router;