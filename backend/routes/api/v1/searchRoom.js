const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Room = require('../../../models/room');

router.get('/', function(req, res) {

    Room.find({}, function(err, rooms) {
        res.json(rooms);
    });

});

module.exports = router;
