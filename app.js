/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable import/no-extraneous-dependencies */

const express = require('express');

const app = express();


// Home page
app.get('/', (req, res) => {
    res.send('Success');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});