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

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// Export the api to Firebase Cloud Functions
exports.app = functions.https.onRequest(app);
