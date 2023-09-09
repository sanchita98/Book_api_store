const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config()
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/bradsjarDB")
  .then((res) => {
    console.log("database is connected successfully");
  })
  .catch((err) => {
    console.log("unable to connect");
  });

const userRoute = require("./src/route/userRoute")
app.use("/user",userRoute)

const  bookRoute = require("./src/route/bookRoute");
app.use("/book", bookRoute);

const cartRoute = require("./src/route/cartRoute")
app.use("/cart", cartRoute)

const oderRoute = require("./src/route/orderRoute")
app.use("/order", oderRoute)


const port = 6000;

app.listen(port, function () {
  console.log("server is running on port", port);
});
