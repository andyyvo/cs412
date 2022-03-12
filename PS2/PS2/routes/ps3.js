const express = require('express');
const router = express.Router();

/* 
 * req = request obj
 * res = response obj
 * next = run in chain
 */

router.get('/', function(req, res, next) {
    res.render('index', { title: 'PS2' });
});

/* 2. GET route with one fixed string JSON obj key/val pair */
router.get('/ps3-get', function(req, res, next) {
    res.render('ps3-get', { 
        title: 'CS 412 PS2 - Andy Vo',
        subtitle: 'GET it!',
        string: 'CS 412 friend',
    });
});

/* 3. POST route getting param from request with two key/val pairs */
router.post('/ps3-post', function(req, res, next) {
    const username = req.body.username;
    res.render('ps3-post', {
        username: username,
        userLen: username.length,
    });
});

/* 4. GET route that reads input as named val on URL */
router.get('/:urlName', function(req, res, next) {
    const urlName = req.params.urlName;
    res.render('ps3-post', {
        username: urlName,
        userLen: urlName.length,
    });
});

module.exports = router;
