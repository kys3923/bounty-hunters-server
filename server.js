require('dotenv').config(); // #5
// require packages #1
const CORS = require('cors');
const EXPRESS = require('express');

// create instance of express app #2
const APP = EXPRESS();

// set up middleware #3
APP.use(CORS());
APP.use(EXPRESS.urlencoded({ extended: false }));
APP.use(EXPRESS.json());

// connect bounties #13
APP.use('/bounties', require('./controllers/bounties'));
// APP.use('/urlPrefix', require('./controllers/fileToImport'))

// port setting #4
APP.listen(process.env.PORT || 3000, () => {
    console.log(`💰💰Server running ${process.env.PORT}💰💰`);
});