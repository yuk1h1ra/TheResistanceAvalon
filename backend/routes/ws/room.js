const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.json({
        message: "response from ws/room"
    });
});

module.exports = router;
