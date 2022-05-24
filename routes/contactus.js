const express = require('express');
const router = express.Router();
const contactusController = require('../controllers/contactus');


router.get('/contactus', contactusController.getContact);



module.exports = router;