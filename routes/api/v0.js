const express = require('express')
const router = express.Router()
const Image = require('../../models/image')

//importing array of objects
//const gallery = require('../../data/gallery')

router.get('/gallery', async (req, res, next) => {
  const gallery = await Image.find({})
  res.json(gallery)
})

module.exports = router