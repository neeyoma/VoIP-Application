var express = require('express');
var router = express.Router();
const axios = require('axios')
var request = require("request");

/* GET home page. */
router.get('/:id/*', function (req, res, next) {


  console.log(req.params.id);

      var options = {
        method: 'GET',
        url: `https://fmlapi.herokuapp.com/api/contacts/${req.params.id}`,
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        json: true
      };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log('body', body);

        res.render('slide', { c_details: body });
      });

});

router.post('/', function (req, res, next) {

    data = {
    "c_name": req.body.name,
    "c_phone": req.body.phone,
    "c_addr": req.body.address,
    "c_email": req.body.email,
    "c_birthday": req.body.birthday,
  }

      var options = {
        method: 'POST',
        url: 'https://fmlapi.herokuapp.com/api/contacts',
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        body: data,
        json: true
      };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        res.redirect('/contacts')
      });

    })

    module.exports = router;