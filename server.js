require('dotenv').config();
const path = require('path');
const express = require('express');

//routes
const index = require('./routes/index');

//connecting it to mongoDB
const mongoose = require('./_connection.js') 

// to make it static 
const app = express()

app.use(express.static(path.join('./public')));

//setting view engine
app.set('view engine', 'ejs');

// dayJS
app.use('/', (req,res,next)=>{
  res.locals.siteName ='Kiyo Mood Board';
  next();
})

// index
app.use('/', index)

// 404
app.use((req, res) => {
  res.status(404);
  res.send('404 Error Page Not Found')
})

//Listening on which port
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log (`Listening on port: ${PORT}`);
})