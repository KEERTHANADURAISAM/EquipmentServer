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

app.get("/treadmillimgs", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db.collection("TreadmillImages").find().toArray();
    connection.close();
    res.json(resUser);
  } catch (error) {
    console.log(error);
    res.json("somethong went wrong");
  }
});

app.get("/treadmillimgs/:id", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db
      .collection("TreadmillImages")
      .findOne({ _id: new mongodb.ObjectId(req.params.id) });
    connection.close();
    res.json(resUser);
  } catch (error) {
    console.log(error);
    res.json("somethong went wrong");
  }
});

// cross trainers
app.get("/crosstrainersimgs", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db.collection("CrossTrainers").find().toArray();
    connection.close();
    res.json(resUser);
  } catch (error) {
    console.log(error);
    res.json("somethong went wrong");
  }
});

app.get("/crosstrainersimgs/:id", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db
      .collection("CrossTrainers")
      .findOne({ _id: new mongodb.ObjectId(req.params.id) });
    connection.close();
    res.json(resUser);
  } catch (error) {
    console.log(error);
    res.json("somethong went wrong");
  }
});

// massagers

app.get("/massagersimgs", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db.collection("Massager").find().toArray();
    connection.close();
    res.json(resUser);
  } catch (error) {
    console.log(error);
    res.json("somethong went wrong");
  }
});

app.get("/massagersimgs/:id", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db
      .collection("Massager")
      .findOne({ _id: new mongodb.ObjectId(req.params.id) });
    connection.close();
    res.json(resUser);
  } catch (error) {
    console.log(error);
    res.json("somethong went wrong");
  }
});

// exercise bikes

app.get("/exercisebikesimgs", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db.collection("Exercise Bikes").find().toArray();
    connection.close();
    res.json(resUser);
  } catch (error) {
    console.log(error);
    res.json("somethong went wrong");
  }
});

app.get("/exercisebikesimgs/:id", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db
      .collection("Exercise Bikes")
      .findOne({ _id: new mongodb.ObjectId(req.params.id) });
    connection.close();
    res.json(resUser);
  } catch (error) {
    console.log(error);
    res.json("somethong went wrong");
  }
});

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

// app listening

app.listen(process.env.PORT || 3001);
