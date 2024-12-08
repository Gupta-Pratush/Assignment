const mongoose = require("mongoose");

function mongoDB() {
  return  mongoose
    .connect(
      process.env.MONGO
    )
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => console.error("Database connection error:", error));
}

module.exports =  {mongoDB} ;
