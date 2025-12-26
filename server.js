const express = require("express");
const app = express();
const mongoose = require("mongoose");

const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
const categoryAddedToDBRouter = require("./routes/categoryimport.router");
const categoryRouter = require("./routes/category.router");
const hotelRouter = require("./routes/hotel.router");
const singleHotelRouter = require("./routes/singlehotel.router");
const authRouter = require("./routes/auth.router");
const wishlistRouter = require("./routes/wishlist.router");




const connectDb = require("./config/dbconfig");


const PORT = 3500;
app.use(express.json());
connectDb();

app.get("/", (req, res) => {
    res.send("Hello World!")
})


app.use("/api/hoteldata",hotelDataAddedToDBRouter);
app.use("/api/categorydata",categoryAddedToDBRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hotel",singleHotelRouter);
app.use("/api/auth",authRouter);
app.use("/api/wishlist",wishlistRouter);

mongoose.connection.once("open",() => {
    console.log("DB Connection Successfull");
    app.listen(process.env.PORT || PORT, () => {
        console.log(`Server is up on Port No ${PORT}`)
    })
})

