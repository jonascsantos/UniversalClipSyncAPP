const router = require('express').Router();
let Data = require('../models/data.model');

router.route('/').get((req, res) => {
    Data.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const content = req.body.content;
    const source_dev = req.body.source_dev;
    const target_dev = req.body.target_dev;

    const newData = new Data({
        username,
        content,
        source_dev,
        target_dev
    });

    newData.save()
        .then(() => res.json('Data added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Data.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Data.findByIdAndDelete(req.params.id)
        .then(() => res.json('Data deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Data.findById(req.params.id)
        .then(data => {
            data.username = req.body.username;
            data.content = req.body.content;
            data.source_dev = req.body.source_dev;
            data.target_dev = req.body.target_dev;

            newData.save()
                .then(() => res.json('Data added!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;