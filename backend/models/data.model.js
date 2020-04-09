const mongoose = require('mongoose');

const Schema = mongoose.Schema, 
ObjectId = Schema.ObjectId;

const dataSchema = new Schema ({
    username: { type: String, required: true },
    content: { type: String, required: true },
    device_ref: { type: [ObjectId], required: true}
}, {
    timestamps: true,
})

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;