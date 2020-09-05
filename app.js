const express = require('express');

const phoneBookRouter = require('./routes/phoneBookRoute');

const app = express();

app.use(express.json());

// routes
app.use('/api/contacts', phoneBookRouter);

module.exports = app;
