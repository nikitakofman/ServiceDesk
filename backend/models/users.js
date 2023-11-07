const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  dateOfCreation: Date,
  tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: "tickets" }],
});

const User = mongoose.model("users", userSchema);

module.exports = User;
