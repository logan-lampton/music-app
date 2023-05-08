const functions = require("firebase-functions");
const admin = require("firebase-admin");

const serviceAccount = require("/home/logan/Development/code/phase-6/private-key/permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Express
const express = require("express");
const app = express();
const db = admin.firestore();

// cors
const cors = require("cors");
app.use(cors({ origin: true }));

// Routes

// POST
app.post("/api/create", (req, res) => {
  (async () => {
    try {
      await db
        .collection("videos")
        .doc("/" + req.body.id + "/")
        .create({
          artist: req.body.artist,
          title: req.body.title,
          link: req.body.link,
        });
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// GET
app.get("/hello-world", (req, res) => {
  return res.status(200).send("Hello World!");
});

// GET specific id
app.get("/api/read/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("videos").doc(req.params.id);
      let video = await document.get();
      let response = video.data();

      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// GET all
app.get("/api/read", (req, res) => {
  (async () => {
    try {
      let query = db.collection("videos");
      let response = [];
      await query.get().then((querySnapshot) => {
        let docs = querySnapshot.docs;
        for (let doc of docs) {
          const selectedItem = {
            id: doc.id,
            artist: doc.data().artist,
            title: doc.data().title,
            link: doc.data().link,
          };
          response.push(selectedItem);
        }
        return response;
      });
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// Add and delete reviews via patch
app.patch("/api/update/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("videos").doc(req.params.id);
      await document.update({
        rating: req.body.rating,
      });
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// Export the api to Firebase Cloud Functions
exports.app = functions.https.onRequest(app);
