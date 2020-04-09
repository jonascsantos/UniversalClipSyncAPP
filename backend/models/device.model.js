const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deviceSchema = new Schema ({
    username: { type: String, required: true },
    name: { type: String, required: true },
    model: { type: String, required: true },
    status: { type: String, required: true },
}, {
    timestamps: true,
})

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;