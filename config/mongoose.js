const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error connecting to DB"));
db.once("open", () => console.log("Connected to Database Successfully"));

module.exports = db;

