const express = require("express");
const User = require("../model/user.model");
const router = express.Router();
const CryptoJs = require("crypto-js")

router.route("/register").post(async(req,res)=>{
        try {
            const newUser =new User ({
                username: req.body.username,
                number:req.body.number,
                password:CryptoJs.AES.encrypt(req.body.password , process.env.PASSWORD_SECRET_KEY).toString(),
                email:req.body.email,
            })
            const savedUser =  await newUser.save();
            res.status(201).json(savedUser);
        } catch (error) {
            res.status(500).json({message:"Error Creating a User"})
            console.log("the error is:", error);
        }
})


router.route("/login").post(async(req,res)=>{
    try {
       const number = await User.find({number : req.body.number});
       !number && res.status(401).json({message:"Invalid Mobile Number"});
       const decodedPassword = CryptoJs.AES.decrypt(User.password,process.env.PASSWORD_SECRET_KEY).toString();
       !decodedPassword && res.status(401).json({message:"Invalid Password"})
    } catch (error) {
        console.log("the Error is :", error);
    }
})

module.exports = router;