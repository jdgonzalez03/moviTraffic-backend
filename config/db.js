const mongoose = require("mongoose");

const password = 'moviTraffic'

const conectionString = `mongodb+srv://jdgonzalez:${password}@cluster0.uidni.mongodb.net/moviTraffic?retryWrites=true&w=majority&appName=Cluster0`

mongoose
  .connect(conectionString)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error(error);
  });