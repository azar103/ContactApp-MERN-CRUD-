const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const contactRouter = require('./routes/contact')
mongoose.connect('mongodb+srv://will:passwordmongodb@cluster0-cnmf6.mongodb.net/test?retryWrites=true&w=majority',
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                },
                )
                .then(() => console.log('Connexion à MongoDB réussie!'))
                .catch(() => console.log('Echec de la connexion !'));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})
app.use(bodyParser.json())
app.use('/api/contacts', contactRouter);
module.exports = app;