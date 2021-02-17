// Require Mongoose #7
const MONGOOSE = require('mongoose');

// Create the bounty Schema #8
const bountySchema = new MONGOOSE.Schema({
    // look for file structure to be set
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    wantedFor: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    ship: {
        type: String
    },
    reward: {
        type: Number,
        default: 10000
    },
    hunters: [String],
    captured: {
        type: Boolean,
        default: false
    },
    lastSeen: String
});

// exporting module #9
module.exports = MONGOOSE.model('Bounty', bountySchema);
