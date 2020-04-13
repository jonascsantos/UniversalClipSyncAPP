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

router.route('/:id').get((req, res) => {
    Device.findById(req.params.id)
        .then(device => res.json(device))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Device.findByIdAndDelete(req.params.id)
        .then(() => res.json('Device deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Device.findById(req.params.id)
        .then(device => {
            device.username = req.body.username;
            device.name = req.body.name;
            device.model = req.body.model;
            device.status = req.body.status;

            newDevice.save()
                .then(() => res.json('Device added!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;