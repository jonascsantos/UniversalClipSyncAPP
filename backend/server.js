const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const dataRouter = require('./routes/data');
const usersRouter = require('./routes/users');
const devicesRouter = require('./routes/devices');
const favouritesRouter = require('./routes/favourites');

app.use('/users', usersRouter);
app.use('/data', dataRouter);
app.use('/devices', devicesRouter);
app.use('/favourites', favouritesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});