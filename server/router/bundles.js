const axios = require('axios').default;
const router = require('express').Router();
const { service1, service2, service3 } = require('../config/services');

router.get('/services1.js', (req, res) => {
  axios.get(`${service1.url}/${service1.bundle}`)
    .then((response) => {
      res.set('Cache-Control', 'public, max-age=31557600'); // one year
      res.type('.js').send(response.data);
    });
});

router.get('/723.bundle.js', (req, res) => {
  axios.get(`${service1.url}/723.bundle.js`)
    .then((response) => {
      res.set('Cache-Control', 'public, max-age=31557600'); // one year
      res.type('.js').send(response.data);
    });
});

router.get('/789.bundle.js', (req, res) => {
  axios.get(`${service1.url}/789.bundle.js`)
    .then((response) => {
      res.set('Cache-Control', 'public, max-age=31557600'); // one year
      res.type('.js').send(response.data);
    });
});

router.get('/services2.js', (req, res) => {
  axios.get(`${service2.url}/${service2.bundle}`)
    .then((response) => {
      res.set('Cache-Control', 'public, max-age=31557600'); // one year
      res.type('.js').send(response.data);
    });
});

router.get('/services3.js', (req, res) => {
  axios.get(`${service3.url}/${service3.bundle}`)
    .then((response) => {
      res.set('Cache-Control', 'public, max-age=31557600'); // one year
      res.type('.js').send(response.data);
    });
});

module.exports = router;
