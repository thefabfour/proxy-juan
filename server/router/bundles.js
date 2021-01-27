const axios = require('axios').default;
const router = require('express').Router();
const { service1 } = require('../config/services');

router.use('/services1.js', (req, res) => {
  axios.get(`${service1.url}/${service1.bundle}`)
    .then((response) => {
      res.type('.js');
      res.send(response.data);
    });
});

module.exports = router;
