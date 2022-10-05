const mongoose = require("mongoose");


mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb://127.0.0.1:27017/do-the-ding-dang-thing",
      console.log(process.env.MONGODB_URI),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to Mongo!");
    console.log(process.env.MONGODB_URI)
  })
  .catch((err) => {
    console.error("Error connecting to Mongo", err);
    console.log(process.env.MONGODB_URI);
  });

module.exports = mongoose.connection;