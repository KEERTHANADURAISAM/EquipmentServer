const express = require("express");
const app = express();
const mongodb = require("mongodb");
const dotenv = require("dotenv").config();
const mongoClient = mongodb.MongoClient;
const cors = require("cors");
const URL = process.env.DB;
const DB = "EquipmentRentalPortal";

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/user", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    await db.collection("EquipmentImages").insertOne(req.body);
    connection.close();
    res.json("Data inserted");
  } catch (error) {
    console.log(error);
    res.json("somethong went wrong");
  }
});

// all get requests in Rental items

app.put("/user/:id", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db
      .collection("EquipmentImages")
      .findOneAndUpdate(
        { _id: new mongodb.ObjectId(req.params.id) },
        { $set: req.body }
      );
    connection.close();
    res.json(resUser);
  } catch (error) {
    console.log(error);
    res.json("somethong went wrong");
  }
});

app.delete("/user/:id", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db
      .collection("EquipmentImages")
      .findOneAndDelete({ _id: new mongodb.ObjectId(req.params.id) });
    connection.close();
    res.json(resUser);
  } catch (error) {
    console.log(error);
    res.json("somethong went wrong");
  }
});

// register password
app.post("/register", async function (req, res) {
  try{
  const connection = await mongoClient.connect(URL);
  const db = connection.db(DB);
  const resUser = await db.collection("users").insertOne(req.body);
  db.connection.close();
  res.status(200).json("successfully registered");
  }
  catch(error){
    res.status(500).json("can't register");
  }
})



// app listening

app.listen(process.env.PORT || 3001);
