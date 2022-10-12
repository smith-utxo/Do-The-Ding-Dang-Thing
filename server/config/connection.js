const mongoose = require("mongoose");
// require("dotenv").config();

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://mrtofu:password43216@cluster0.girsh.mongodb.net/do-da-ting?retryWrites=true&w=majority",
  // "mongodb://127.0.0.1:27017/do-the-ding-dang-thing",
  // "mongodb+srv://easyPass:ABC54321@cluster1.fvwozyg.mongodb.net/work?retryWrites=true&w=majority",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
