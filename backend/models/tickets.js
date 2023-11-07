const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
  title: String,
  number: String,
  dateOfCreation: String,
  priority: String,
  status: String,
});

const Ticket = mongoose.model("tickets", ticketSchema);

module.exports = Ticket;
