const express = require('express');
const router = express.Router();

// Controllers (using require)
const { home } = require('../controller/home');
const { about } = require('../controller/about');
const { resume } = require('../controller/resume');
const { service } = require('../controller/service');
const { portfolio } = require('../controller/portfolio');
const { contact, usercontact } = require('../controller/contact');

// Routes
router.get('/', home);
router.get('/about', about);
router.get('/resume', resume);
router.get('/service', service);
router.get('/portfolio', portfolio);
router.get('/contact', contact);
router.post('/contact', usercontact);

module.exports = router;
