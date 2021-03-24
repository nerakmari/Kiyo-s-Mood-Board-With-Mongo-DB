const mongoose = require('./_connection.js') 

// Import seed data
const dbSeed = require(`./seeds/image.js`);

// Define model
const Images = require(`./project-root/models/image.js`);

Images.insertMany(dbSeed, function(error, images) {
  console.log('Data import completed.')
  mongoose.connection.close();
});