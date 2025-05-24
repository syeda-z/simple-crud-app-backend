const express = require("express");
const mongoose = require("mongoose");
//model being imported
const Product = require("./models/product.model.js");
//importing router
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/products",productRoute);


app.get("/", (req, res) => {
  res.send("hello from NODE API server hi");
});


//connecting the program to mongodb
mongoose
  .connect(
    "mongodb+srv://Syeda:2zNHMt2wzHIXE8t2@backend.vkxrbhh.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("connected to DB"); //executes wen connected
    app.listen(3000, () => {
      console.log("server is on port 3000"); //executes after the above line
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
//gives above o/p once its connected or not
