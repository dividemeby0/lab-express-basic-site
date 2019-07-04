const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const skaterSchema = new Schema({
  name: String,
  country: String,
  record: String,
  description: String,
  program1: String,
  program2: String,
  image: String
})

const skaterModel = mongoose.model("Skater", skaterSchema);

module.exports = skaterModel;