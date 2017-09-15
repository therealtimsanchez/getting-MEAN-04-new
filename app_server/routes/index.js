var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
var ctrlHello = require('../controllers/hello');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about/', ctrlOthers.about);


/* Pizza Page*/
router.get('/', ctrlHello.pizza);
router.get('/pizza', ctrlHello.pizzaInfo);
router.get('/pizza', ctrlHello.pizzaReview);

module.exports = router;
