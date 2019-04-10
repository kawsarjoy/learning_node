const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');
const app = express();
app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const news = require('./routes/news');

app.use('/news', news);

// app.use((req, res, next) => {
//     console.log(req.url, req.method);
//     next();
// });

app.use('/example', (req, res, next) => {
    console.log(req.url, req.method);
    req.banana = 'banana';
    next();
});

app.get('/example', (req, res) => {

    console.log(req.banana);

});

app.get('/', (req, res) => {

    console.log(req.body);

    // const schema = Joi.object().keys({
    //     email: Joi.string().trim().email().required(),
    //     password: Joi.string().min(5).max(20).required()
    // });

    // Joi.validate(req.body, schema, (err, result) => {

    //     if(err)
    //     {
    //         res.send("An error occurred!");
    //     }else 
    //     {
    //         console.log(result);
    //         res.send('Successfully posted!');
    //     }
    // });

    // const arrayString = ['banana', 'orange', 'apple'];
    // const arrayObject = [{example: 'example1'}, {example: 'example2'}];

    // const userInput = { personalInfo : {
    //                         street: '45f4s5df',
    //                         city: 'fdsfd',
    //                         state: 'fdfd'
    //                     },
    //                     preferences: arrayString,
    //                     iterests: arrayObject
    //                 };

    // const personalInfoSchema = Joi.object().keys({
    //     street: Joi.string().trim().required(),
    //     city: Joi.string().trim().required(),
    //     state: Joi.string().trim().length(2).required(),
    // });

    // const preferencesSchema = Joi.array().items(Joi.string());
    // const iterestsSchema = Joi.array().imtes(Jion.object().keys({
    //     example: Joi.string().required()
    // }));

    // const schema = Joi.object().keys({
    //     personalInfo: personalInfoSchema,
    //     preferences: preferencesSchema
    // });

    // Joi.validate(userInput, schema, (err, result) => {

    //     if(err)
    //     {
    //         res.send("An error occurred!");
    //     }else 
    //     {
    //         console.log(result);
    //         res.send('Successfully posted!');
    //     }
    // });

    //res.json({success: true});

    res.sendFile(path.join(__dirname, 'static', 'index.html'));


});

app.get('/:userQuery', (req, res) => {
    res.render('index', {data: {userQuery: req.params.userQuery,
                                searchReqults: ['fdsfsd', 'f sdfsd']}});
});

app.get('/example', (req, res) => {

    res.send("Hitting example");

});

app.get('/example/:name/:age', (req, res) => {

    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age);

});

app.listen(8080);
