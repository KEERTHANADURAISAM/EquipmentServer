const express = require("express");
const app = express();
const mongodb = require("mongodb");
const dotenv = require("dotenv").config();
const mongoClient = mongodb.MongoClient;
const cors = require("cors")
const URL =process.env.DB
const DB = "EquipmentRentalPortal";
app.use(express.json());
app.use(cors({
origin:"http://localhost:3000"
}))

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


// out of stcok imgs in treadmill
app.get("/treadmillimgsoutofstock", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db.collection("TreamillOutofStock").find().toArray();
    connection.close();
    res.json(resUser);
  } catch (error) {
    console.log(error);
    res.json("somethong went wrong");
  }
});

app.get("/treadmillimgsoutofstock/:id", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db
      .collection("TreamillOutofStock")
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

// crosstrainersimgsoutofstock
app.get("/crosstrainersimgsoutofstock", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db.collection("CrossTrainersOutofStock").find().toArray();
    connection.close();
    res.json(resUser);
  } catch (error) {
    console.log(error);
    res.json("somethong went wrong");
  }
});

app.get("/crosstrainersimgsoutofstock/:id", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db
      .collection("CrossTrainersOutofStock")
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


// massager out of stock
app.get("/massagersimgsoutofstock", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db.collection("MassagerOutofStock").find().toArray();
    connection.close();
    res.json(resUser);
  } catch (error) {
    console.log(error);
    res.json("somethong went wrong");
  }
});

app.get("/massagersimgsoutofstock/:id", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db
      .collection("MassagerOutofStock")
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

// exercise bikes outof stock
app.get("/exercisebikesimgsoutofstock", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db.collection("ExcerciseBikeOutofStock").find().toArray();
    connection.close();
    res.json(resUser);
  } catch (error) {
    console.log(error);
    res.json("somethong went wrong");
  }
});

app.get("/exercisebikesimgsoutofstock/:id", async function (req, res) {
  try {
    const connection = await mongoClient.connect(URL);
    const db = connection.db(DB);
    const resUser = await db
      .collection("ExcerciseBikeOutofStock")
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

app.listen(process.env.PORT || 3001);
