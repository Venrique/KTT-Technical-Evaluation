const { json } = require('express');
const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");


router.get('/', function (req, res) {
    res.render('index',{title: 'KTT Technical Evaluation', page: 'home'});

});

router.get('/confirmed', async (req, res) => {
    const API_URL = "https://covid-api.mmediagroup.fr/v1/cases?country=france"
    const options = {
        "method": "GET",
    }

    const response = await fetch(API_URL, options)
        .then(res => res.json())
        .catch(e => {
            console.error({
                "message": "oh no",
                error: e,
            });
        });
    console.log(response);
    res.json(response);
    //res.render('index',{title: 'KTT Technical Evaluation', page: 'confirmedCases'});
});

router.get('/vaccines', async (req, res) => {
    const API_URL = "https://covid-api.mmediagroup.fr/v1/vaccines"
    const options = {
        "method": "GET",
    }

    const response = await fetch(API_URL, options)
        .then(res => res.json())
        .catch(e => {
            console.error({
                "message": "oh no",
                error: e,
            });
        });
    
    var vac = {}
    var key = 'Vaccines'
    vac[key] = [];
    
    Object.keys(response).forEach(element => {
        var data = {
            country: element,
            administered: response[element].All.administered,
            vaccinated: response[element].All.people_vaccinated,
            partially: response[element].All.people_partially_vaccinated
        }
        vac[key].push(data);
    });

    res.render('index',{title: 'KTT Technical Evaluation', page: 'confirmedCases', vac});
});


module.exports = router;