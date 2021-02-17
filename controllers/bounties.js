// dependencies and reference #11
const DB = require('../models');
const ROUTER = require('express').Router();

// POST '/' - create one bounty #16
ROUTER.post('/', (req, res) => {
    // res.send('Hitting the post route') //check if this works #19
    // create DB
    DB.Bounty.create(req.body)
    .then(newBounty => {
        res.status(201).send(newBounty);
    })
    .catch(err => {
        res.status(500).send({ message: 'Internal Server Error' })
    })
});
    // check if this works on (Insomnia) #20

// GET '/' - read all bounties #14
    // #21
ROUTER.get('/', (req, res) => {
    // res.send('We are getting bounties') //#22 check Insomnia
    DB.Bounty.find()
    .then(bounties => {
        res.status(200).send(bounties)
    })
    .catch(err => {
        res.status(500).send({ message: ' Error in READ all bounties '})
    })
});
    // check Insomnia #23

// GET '/:id' - read one bounty #15
ROUTER.get('/:id', (req, res) => {
    DB.Bounty.findById(req.params.id)
    .then(bounty => {
        if (bounty) {
            res.send(bounty);
        }
        else {
            res.status(404).send({ message: '404 - Bounty not found'})
        }
    })
    .catch(err => {
        res.status(303).send({ message: 'Service unavailable' })
    });
});
    // check Insomnia #24

// PUT '/:id' - update one bounty #17
ROUTER.put('/:id', (req, res) => {
    // console.log(req.body);
    DB.Bounty.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true } //otherwise it will show all history of the data
    )
    .then(updatedBounty => {
        res.send(updatedBounty);
    })
    .catch(err => {
        console.log(err);
        res.status(503).send({ message: 'Update error' })
    });
});
    // check Insomnia #25

// DELETE '/:id' - delete one bounty #18
ROUTER.delete('/:id', (req, res) => {
    DB.Bounty.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(204).send({ message: 'Bounty Deleted' });
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({ message: 'Error in deleting'});
    });
});

    // check Insomnia #26

// export #12
module.exports = ROUTER;