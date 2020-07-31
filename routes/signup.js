var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', { msg: 'FreeMobileLinking' });
});

router.post('/', function(req, res, next) {
  axios({
    method: 'post',
    url:'https://fmlapi.herokuapp.com/api/users',
    headers: {
      'cache-control': 'no-cache',
      'content-type': 'application/json'
    },
    data: {
      email: req.body.email,
      password: req.body.password
    }
  })
    .then(response => {
      console.log("login good");
      res.redirect('/login');
    })
    .catch(error => {
      res.render('signup', {
        error: 'Sign up failed. Please try again'
      });
    });
});
module.exports = router;
