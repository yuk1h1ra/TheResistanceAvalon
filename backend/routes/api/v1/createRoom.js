const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Room = require('../../../models/room');

router.post('/', function(req, res) {

    new Room({
        name: req.body.title,
        seats: Number(req.body.seats)
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
