const router = require('express').Router();
let Device = require('../models/device.model');

router.route('/').get((req, res) => {
    Device.find()
        .then(devices => res.json(devices))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const model = req.body.model;
    const status = req.body.status;
   
    const newDevice = new Device({ 
        username,
        name,
        model,
        status, 
    });

    newDevice.save()
        .then(() => res.json('Device added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;