const express = require('express')
const router = express.Router()
const Image = require('../../models/image')

//importing array of objects
router.get('/gallery', async (req, res, next) => {
  try{
      const gallery = await Image.find({})
  res.json(gallery)
  } catch(err){
    return next (err);
  }

})

module.exports = router