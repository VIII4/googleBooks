require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

//let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googleBooks";
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googleBooks";
// connect to mongoDB database
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

// on mongoose error
mongoose.connection.on("error", (err) => {
  console.log("Database error occurred", err);
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
