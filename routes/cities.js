var express = require('express');
var router = express.Router();

const City = require('../models/City')
var { getCity } = require("../services/getCity");

router.get('/', function (req, res, next) {
    City.find((err, cities) => {
        if (err)
            console.log(err);
        else
            res.json(cities);

    });
});

module.exports = router;
