const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Room = require('../../../models/room');

router.get('/', function(req, res) {

    new Room({
        name: "Hello World",
        seats: 5
    }).save(function (err, room) {
        if(err) {
            console.log(err);
        } else {
            console.log(room);
        }
    })

    res.json({
        message: "OK, this is a createRoom",
    });
});

module.exports = router;
