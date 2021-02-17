const MONGOOSE = require('mongoose');

// connect #6
MONGOOSE.connect(process.env.MONGODB_URI || 'mongodb://localhost/hunters', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// export #10
module.exports.Bounty = require('./bounty');