var express = require('express');
var router = express.Router();

const API_URL = "https://covid-api.mmediagroup.fr/v1/cases"


router.get('/', function (req, res) {
    res.render('index',{title: 'KTT Technical Evaluation', page: 'confirmedCases'});

});

module.exports = router;