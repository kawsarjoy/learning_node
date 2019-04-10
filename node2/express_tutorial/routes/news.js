const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {

    console.log('from news route');
    res.send('from news route');
});

route.get('/list', (req, res) => {

    console.log('from news route');
    res.send('from news route');
});

route.use((req, res, next) => {

    console.log('mews middleware used');
    next();
});

module.exports = route;