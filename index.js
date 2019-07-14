const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ContactForm = require('./routes/contactform');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/api/v1/form', ContactForm);
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});
const POR = process.env.PORT || 4020;
app.listen(POR);