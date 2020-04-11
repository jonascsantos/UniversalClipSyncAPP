const router = require('express').Router();
let Favourite = require('../models/favourites.model');

router.route('/').get((req, res) => {
    Favourite.find()
        .then(favourites => res.json(favourites))
        .catch(err => res, status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const data_ref = req.body.data_ref;
   
    const newFavourite = new Favourite({ 
        username,
        data_ref
    });

    newFavourite.save()
        .then(() => res.json('Favourite added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;