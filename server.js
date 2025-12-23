const express = require("express");
const app = express();
const mongoose = require("mongoose");


const hotelRouter = require("./routes/hotel.router");
const connectDb = require("./config/dbconfig")

const PORT = 3500;
app.use(express.json());
connectDb();

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use("/api/hotels", hotelRouter);

mongoose.connection.once("open",() => {
    console.log("DB Connection Successfull");
    app.listen(process.env.PORT || PORT, () => {
        console.log(`Server is up on Port No ${PORT}`)
    })
})

