//Declarations
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

/*
  This Async method will connect to the database using mongoose.
If the connection fails it will exit the connection with one plus will
dysplay the error log in the console.

  #db info is pulled from the default.jason file
*/
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    Console.error(err.message);

    process.exit(1);
  }
};

module.exports = connectDB;
