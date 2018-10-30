const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Room = require('../../../models/room');

router.get('/', function(req, res) {

    Room.find({}, function(err, docs) {
        res.json({
            rooms: docs
        });
    });

});

module.exports = router;
