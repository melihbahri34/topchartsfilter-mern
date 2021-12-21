const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://melihbahri:_Gamer404@cluster0.ln88b.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
});