const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    await mongoose.connect("mongodb://root:mongodb@127.0.0.1:27017/authsystem");
  } catch (error) {
    console.log(error);
    throw error;
  }
}
module.exports = connectDatabase;
