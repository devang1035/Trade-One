require("dotenv").config();
const {HoldingModel} = require("./models/HoldingModel");
const {PositionModel} = require("./models/PositionModel");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {OrderModel} = require("./models/OrderModel");
const {UserModel} = require("./models/UserModel");
const authRoute = require("./Routes/AuthRoute");
const cookieParser = require("cookie-parser");
const PORT= process.env.PORT;
const URL= process.env.MONGO_URL;
const router = express.Router();
const serverless = require("serverless-http");
const app = express();


mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

  app.use(
    cors({
      origin: "https://yourdashboard.netlify.app",
      methods: ["GET", "POST", "PUT", "DELETE",'OPTIONS'],
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization','X-Requested-With', 'Accept'],
    })
  );
  
  app.use(cookieParser());
  
  app.use(express.json());
  
  app.use("/", authRoute);
  

app.get("/allholdings",async(req,res)=>{
  let allholdings = await HoldingModel.find({});
  res.json(allholdings);
});

app.get("/allpositions",async(req,res)=>{
  let allpositions = await PositionModel.find({});
  res.json(allpositions);
});

app.post("/newOrder",async(req,res)=>{
    let newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    newOrder.save();
    res.send("Order Saved!");
});

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);

app.listen(PORT,()=>{
    console.log("app started");
});

