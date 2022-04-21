require('dotenv').config()
// const CONFIG = require('../config.js')
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const request = require('request');

/* ps4 POST to Ticketmaster API */

router.get('/', (req, res, next) => {
    // console.log('reached 1');
    res.render('ticketmaster', { title: 'Ticketmaster' });
});

/*
 * Promise-Based HTTP Request to Ticketmaster API
 */
router.post('/results-promise', (req, res, next) => {
    // console.log('reached 2');

    const location = req.body.location;
    const event = req.body.event;
    const fetchPromise = fetch(`${process.env.TICKETMASTER_URL}events.json?apikey=${process.env.TICKETMASTER_API_KEY}&keyword=${req.body.event}&city=${req.body.location}`);
    fetchPromise.then(response => {
        return response.json();
    }).then(json => {
        // console.log('reached 3');
        console.log(json._embedded.events[0]);
        console.log(json._embedded.events[0].name);
        res.render('results', {
            title: 'Ticketmaster',
            location: location,
            event: event,
            type: 'Promise',
            result: json._embedded.events[0].name,
        });
    }).catch(err => {
        console.log(err);
    }); 
});

/*
 * Async/Await-Based HTTP Request to Ticketmaster API
 */
router.post('/results-async', async(req, res, next) => {
    const location = req.body.location;
    const event = req.body.event;
    try {
        const asyncReq = await fetch(`${process.env.TICKETMASTER_URL}events.json?apikey=${process.env.TICKETMASTER_API_KEY}&keyword=${req.body.event}&city=${req.body.location}`);
        const json = await asyncReq.json();
        res.render('results', {
            title: 'Ticketmaster',
            location: location,
            event: event,
            type: 'Async',
            result: json._embedded.events[0].name,
        });
    } catch (error) {
        console.log(error);
        res.render('results', {
            title: 'Ticketmaster',
            location: location,
            event: event,
            type: 'Async',
            result: 'No results found',
        });
    }
});

/*
 * Callback-Based with Request Package HTTP Request to Ticketmaster API
 */
router.post('/results-callback', (req, res, next) => {
    const options = {
        url: `${process.env.TICKETMASTER_URL}events.json?apikey=${process.env.TICKETMASTER_API_KEY}&keyword=${req.body.event}&city=${req.body.location}`,
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            const json = JSON.parse(body);
            res.render('results', {
                title: 'Ticketmaster',
                location: req.body.location,
                event: req.body.event,
                type: 'Callback',
                result: json._embedded.events[0].name,
            });
        }
    }

    request(options, callback);
});

module.exports = router;