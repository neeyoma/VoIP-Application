var express = require('express');
var router = express.Router();
const axios = require('axios')
var request = require("request");

/* GET home page. */
router.get('/', function (req, res, next) {

      var options = {
        method: 'GET',
        url: 'https://fmlapi.herokuapp.com/api/contacts',
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        json: true
      };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);

        // console.log('body', body);

        res.render('contacts', { my_contacts: body });
      });

});

/* Post from contact page. */
// router.post('/', function(req, res, next) {
//   console.log(req.body)
//   // post it to api
//   data = {
//     "c_name": req.body.name,
//     "c_phone": req.body.phone,
//     "c_addr": req.body.address,
//     "c_email": req.body.email,
//     "c_birthday": req.body.birthday,
//   }
//   axios.post('https://fmlapi.herokuapp.com/api/contacts', data)
//   .then(response => console.log("was successful:", response))
//   .catch(err => console.log("Got an err: ", err))
//   // res.render('contacts', { msg: 'FreeMobileLinking' });
// });


/* POST login */
// router.post('/', function(req, res, next) {

//   axios({
//     method: 'post',
//     url: 'https://fmlapi.herokuapp.com/api/contacts',
//     headers: {
//       'cache-control': 'no-cache',
//       'content-type': 'application/json'
//     },
//     data: {
//       "c_name": req.body.name,
//       "c_phone": req.body.phone,
//       "c_addr": req.body.address,
//       "c_email": req.body.email,
//       "c_birthday": req.body.birthday,
//     }
//   })
//     .then(response => {
//       res.redirect('/contacts');
//     })
//     .catch(error => {
//       console.log('error was', error)
//       res.render('contacts');
//     });
// });



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