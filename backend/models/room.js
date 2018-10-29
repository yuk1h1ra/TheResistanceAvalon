const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Room = new Schema({
    roomId: ObjectId,
    name: String,
    seats: Number,
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Room', Room);
