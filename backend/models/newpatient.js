const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, "Please enter a name"],
 },

 age: {
  type: Number,
  required: [true, "Please enter a age"],
 },
 contact: {
  type: Number,
  required: [true, "Please enter a contact number"],
  minlength: [10, "mobile number must be at least 10 number"],
  maxlength: [10, "mobile number must be at least 10 number"],
 },
 address: {
  type: String,
  required: [true, "Please enter a address."],
  minlength: [3, "address must be at least 3 characters."],
  maxlength: [255, "mobile number must be at least 255 characters."],
 },
 gender: {
  type: String,
  required: [true, "Please enter a gender."],
 },
 diagnostic: {
  type: String,
  required: [true, "Please enter a diagnostic"],
 },
 createdAt: {
  type: Date,
  default: Date.now,
 },
});

module.exports = mongoose.model("Patient", patientSchema);