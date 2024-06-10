const mongoose = require("../database");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  cnpj: {
    type: String,
    require: true,
    unique: true,
  },
  company: {
    type: String,
    require: true,
  },
  contact: {
    type: String,
    require: true,
  },
  segment: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 15);
  this.password = hash;

  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
