const mongoose = require('mongoose');

const Schema = mongoose.Schema, 
ObjectId = Schema.ObjectId;

const favouritesSchema = new Schema ({
    username: { type: String, required: true },
    data_ref: { type: [ObjectId], required: true}
}, {
    timestamps: true,
})

const Favourites = mongoose.model('Favourites', favouritesSchema);

module.exports = Favourites;