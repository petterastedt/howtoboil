const express = require('express');
const router = express.Router();
const Content = require("../models/Content");

//  Get content
router.post('/content', (req, res, next) => {
    Content.find( { "name": req.body.string } )
    .then(content=> {
        res.json(content)
      })
      .catch(err => {
        res.json({ message: 'Error fetching content'})
      })
});

module.exports = router;
