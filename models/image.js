// Defining our Schema 
const mongoose = require('mongoose');
const gallerySchema = new mongoose.Schema(
  {
    id:           Number,
    title:        String,
    description:  String,
    source:       String,
    width:        Number,
    height:       Number, 
    pathURL:     String,
    attribution:  {
      credit: String
    }
  }
);

// Compiling and exporting our model using the Schema above 
module.exports = mongoose.model('Images', gallerySchema);