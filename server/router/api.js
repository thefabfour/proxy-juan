const axios = require('axios').default;
const router = require('express').Router();
const { service1, service2, service3 } = require('../config/services');

router.use(service1.cal, (req, res) => {
  axios.get(`${service1.url}${req.baseUrl}`)
    .then((response) => {
      res.send(response.data);
    });
});

router.use(service1.api, (req, res) => {
  axios.get(`${service1.url}${req.baseUrl}`)
    .then((response) => {
      res.send(response.data);
    });
});

router.use(service2.api, (req, res) => {
  axios.get(`${service2.url}${req.baseUrl}`)
    .then((response) => {
      res.send(response.data);
    });
});

router.use(service3.api, (req, res) => {
  axios.get(`${service3.url}${req.baseUrl}`)
    .then((response) => {
      res.send(response.data);
    });
});

module.exports = router;
