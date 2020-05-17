const router = require('express').Router();
let Favourite = require('../models/favourites.model');

router.route('/').get((req, res) => {
    Favourite.find()
        .then(favourites => res.json(favourites))
        .catch(err => res.status(400).json('Error: ' + err));
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

router.route('/:id').get((req, res) => {
    Favourite.findById(req.params.id)
        .then(favourites => res.json(favourites))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Favourite.findByIdAndDelete(req.params.id)
        .then(() => res.json('Favourite deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Favourite.findById(req.params.id)
        .then(favourites => {
            favourites.username = req.body.username;
            favourites.data_ref = req.body.data_ref;
            
            favourites.save()
                .then(() => res.json('Favourites updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;