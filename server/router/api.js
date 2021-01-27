const axios = require('axios').default;
const router = require('express').Router();
const { service1 } = require('../config/services');

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

module.exports = router;
