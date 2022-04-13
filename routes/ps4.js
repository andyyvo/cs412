const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

/* ps4 POST to Yelp API */

// router.get('/', function(req, res, next) {
//     res.render('yelp', { title: 'Yelp' });
// });

router.post('/', async(req, res, next) => {
    res.render('yelp', { title: 'Yelp' });
});

module.exports = router;