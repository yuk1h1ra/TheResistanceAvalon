const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Room = require('../../../models/room');

router.get('/', function(req, res) {

    const createdRoom = new Room({
        name: "Hello World",
        seats: 5
    }).save(function (err, room) {
        if(err) {
            console.log(err);
        } else {
            console.log("yay");
            console.log(room);
        }
    })

    res.json({
        message: "OK, this is a createRoom",
        room: createdRoom
    });
});

module.exports = router;
