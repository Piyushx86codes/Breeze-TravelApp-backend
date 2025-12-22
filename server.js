const express = require("express");
const app = express();
const hotelRouter = require("./routes/hotel.router");

const PORT  = 3500;
app.use(express.json());

app.get("/",(req,res)=>{
    return "Hello World";
})

app.use("/api/hotels",hotelRouter);

app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server is up on Port No ${PORT}`)
})