const express = require("express");
const router = express.Router();

const Category = require("../model/Category.model");
const categories = require("../data/categories");

router.route("/").post( async (req,res)=>{
   try {
    await Category.remove();
    const categoriesinDB = await Category.insertMany(categories.data);
    res.json(categoriesinDB)
   } catch (error) {
    console.log(error);
     res.json({message:"failed to add categories to DB"})
   }
})

module.exports = router;