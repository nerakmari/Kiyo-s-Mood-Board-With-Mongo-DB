const express = require('express');
const router = express.Router();
const dayJS = require('dayjs')
const apiRoute = require('./api/v0')
const Image = require('../models/image')

  router.get('/', (req, res) => {
    res.render('pages/index', {pageTitle: 'Index', dayJS})
  })
  
  // GET single image
  router.get('/images/:id', async(req ,res ,next )=>{
    try{
      const image = await Image.findOne({id: req.params.id});
      res.render('pages/single-image', {pageTitle: image.title, image, dayJS});      
    }catch(err){
      return next(err);
    }
  })

  router.get('/login', (req, res) => {
    res.render('pages/login', {pageTitle: 'Login', dayJS})
  })
  
  router.get('/register', (req, res) => {
    res.render('pages/register', {pageTitle: 'Register', dayJS})
  })

  router.use('/api/v0', apiRoute)

  module.exports = router;
