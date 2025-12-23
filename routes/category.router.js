const express = require('express');
const router = express.Router();

const category = require("../model/Category.model");

router.route("/").get(async(req,res)=>{
    try {
        const categories = await category.find({});
        res.json(categories)
    } catch (error) {
        res.status(400).json({message:"could not find categories"})
    }
})

module.exports = router;
