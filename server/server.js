const express = require('express');
const mongoose = require('mongoose');




//per module 18
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/do-the-ding-dang-thing', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);
