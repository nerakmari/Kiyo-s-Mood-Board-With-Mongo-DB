const express = require('express');
const router = express.Router();
const dayJS = require('dayjs')
const apiRoute = require('./api/v0')
const Image = require('../models/image')

  router.get('/', (req, res) => {
    res.render('pages/index', {pageTitle: 'Index', dayJS})
  })
  
  // GET single page
  router.get('/images/:id', async(req,res)=>{
    const image = await Image.findOne({id: req.params.id});
    console.log(image.title);
    res.render('pages/single-page', {pageTitle: image.title, image})
  })

  router.get('/login', (req, res) => {
    res.render('pages/login', {pageTitle: 'Login', dayJS})
  })
  
  router.get('/register', (req, res) => {
    res.render('pages/register', {pageTitle: 'Register', dayJS})
  })

  router.use('/api/v0', apiRoute)

  module.exports = router;
