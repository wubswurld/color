const express = require('express');

const contact = require('../controllers/contact');
const router = express.Router();

//sends message to contact.sendmessage
router.post('/sendmessage', contact.sendmessage);

module.exports = router;