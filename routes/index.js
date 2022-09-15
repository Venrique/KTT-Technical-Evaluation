const { json } = require('express');
const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");


router.get('/', function (req, res) {
    res.render('index', { title: 'KTT Technical Evaluation', page: 'home' });

});

router.get('/confirmed', async (req, res) => {
    const API_URL = "https://covid-api.mmediagroup.fr/v1/cases"
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

    var confirmed = {}
    var key = 'Confirmed'
    confirmed[key] = [];

    Object.keys(response).forEach(element => {
        var data = {
            country: element,
            population: response[element].All.population,
            confirmed: response[element].All.confirmed
        }
        confirmed[key].push(data);
    });

    res.render('index',{title: 'KTT Technical Evaluation', page: 'confirmed', confirmed });
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

    res.render('index', { title: 'KTT Technical Evaluation', page: 'vaccines', vac });
});

router.get('/deaths', async (req, res) => {

    const API_URL = "https://covid-api.mmediagroup.fr/v1/history?status=deaths"
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

    var deaths = {}
    var key = 'Deaths'
    deaths[key] = [];
    
    let currDate = new Date();
    let date_ob = new Date(currDate.getTime() - 86400000*2)

    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();
    Object.keys(response).forEach(element => {
        var data = {
            country: element,
            population: response[element].All.population,
            dead: response[element].All.dates[year + "-" + month + "-" + date],
        }
        deaths[key].push(data);
    });


    res.render('index', { title: 'KTT Technical Evaluation', page: 'deaths', deaths });
});


module.exports = router;