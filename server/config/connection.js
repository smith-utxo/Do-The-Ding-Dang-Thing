const mongoose = require("mongoose");
// require("dotenv").config();


mongoose
  .connect(
    // process.env.MONGODB_URI // ||
     // "mongodb://127.0.0.1:27017/do-the-ding-dang-thing"
     'mongodb+srv://easyPass:ABC54321@cluster1.fvwozyg.mongodb.net/work?retryWrites=true&w=majority',
      
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
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


  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
